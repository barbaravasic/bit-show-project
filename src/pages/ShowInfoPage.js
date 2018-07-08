import React, { Component } from 'react';
import { showServices } from '../services/ShowServices';


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

        return seasons.map(season => {
            return <li>{season.startDate} - {season.endDate}</li>
        })
    }

    renderListOfActors() {
        const { actors } = this.state;

        return actors.map(actor => {
            return <li>{actor.name}</li>
        })
    }

    render() {
        const { seasons, actors, clickedShow } = this.state;
        return (
            <React.Fragment>

                <div class='row poster-and-lists'>
                    <div class='col-12 col-md-6'>
                        <img src={clickedShow.posterUrl} id={clickedShow.id} class='info-img' />
                    </div>
                    <div class='col-12 col-md-6'>
                        <div class='row'>
                            <div class='col-12'>
                                <h4>Seasons {seasons.length}</h4>
                                <ul class='seasons'>
                                    {this.renderListOfSeasons()}
                                </ul>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-12'>
                                <h4 class='cast'>Cast</h4>
                                <ul class='actors'>
                                    {this.renderListOfActors()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row description'>
                    <div class='col-12'>
                        <p>{clickedShow.description}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default ShowInfoPage;