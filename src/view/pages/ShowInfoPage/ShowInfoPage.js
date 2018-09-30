import React, { Component } from 'react';
import { showServices } from '../../../services/ShowServices';
import SeasonsList from '../../components/SeasonsList/SeasonsList';
import ActorsList from '../../components/ActorsList/ActorsList';
import ShowDescription from '../../components/ShowDescription/ShowDescription';

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

    componentWillReceiveProps(nextProps) {
        const id = nextProps.match.params.id;
        showServices.getSeasonsAndCast(id)
            .then(showInfoData => {
                this.setState({
                    seasons: showInfoData.listOfSeasons,
                    actors: showInfoData.listOfActors,
                    clickedShow: showInfoData.clickedShow,
                })
            })
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        showServices.getSeasonsAndCast(id)
            .then(showInfoData => {
                this.setState({
                    seasons: showInfoData.listOfSeasons,
                    actors: showInfoData.listOfActors,
                    clickedShow: showInfoData.clickedShow,
                })
            })
    }

    render() {
        const { seasons, clickedShow, actors } = this.state;
        return (
            <div className='container show-info-page'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-5 poster'>
                        <img src={clickedShow.posterUrl} id={clickedShow.id} className='info-img' />
                    </div>
                    <div className='col-12 col-md-6 text-center'>
                       <SeasonsList seasons={seasons} />
                        <ActorsList actors={actors} />
                    </div>
                </div>
                <ShowDescription description={clickedShow.description} />
            </div>
        );
    }
}


export default ShowInfoPage;