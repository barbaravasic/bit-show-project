import React, { Component } from 'react';
import { showServices } from '../services/ShowServices';

import './ShowInfoPage.css'


class ShowInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: [],
            actors: [],
            clickedShow: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        showServices.getSeasonsAndCast(id)
            .then(showInfoData => {
                this.setState({
                    seasons: showInfoData.listOfSeasons,
                    actors: showInfoData.listOfActors,
                    clickedShow: showInfoData.clickedShow
                })
            })
    }

    renderListOfSeasons() {
        const { seasons } = this.state;

        return seasons.map((season, i) => {
            return <li key={i}>{season.startDate} - {season.endDate}</li>
        })
    }

    renderListOfActors() {
        const { actors } = this.state;

        return actors.map((actor, i) => {
            return <li key={i}>{actor.name}</li>
        })
    }

    render() {
        const { seasons, actors, clickedShow } = this.state;
        return (
            <div className='container'>
                <div className='row poster-and-lists'>
                    <div className='col-12 col-md-6 poster'>
                        <img src={clickedShow.posterUrl} id={clickedShow.id} className='info-img' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='row'>
                            <div className='col-12'>
                                <h4>Seasons {seasons.length}</h4>
                                <ul className='seasons'>
                                    {this.renderListOfSeasons()}
                                </ul>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <h4 className='cast'>Cast</h4>
                                <ul className='actors'>
                                    {this.renderListOfActors()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row description'>
                    <div className='col-12'>
                        <h4>Show Description</h4>
                        <p>{clickedShow.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default ShowInfoPage;