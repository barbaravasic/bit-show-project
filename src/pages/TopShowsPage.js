import React, { Component } from 'react';
import { showServices } from '../services/ShowServices';
import TopShowsList from '../components/TopShowsList';

import './TopShowsPage.css';

class TopShowsPage extends Component {
    constructor() {
        super();
        this.state = {
            top50: null,
        }
    }

    componentDidMount() {
        showServices.getTop50()
            .then(top50 => {
                this.setState({
                    top50
                })
            })
    }

    render() {
        return (
            <div className='container'>
                <TopShowsList top50={this.state.top50}/>
            </div>
        );
    }
}

export default TopShowsPage;