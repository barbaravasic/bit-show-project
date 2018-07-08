import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showServices } from '../services/showServices'

class SearchShows extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            shows: null
        }
    }

    onSearch(event) {
        event.preventDefault();
        this.setState({
            searchInput: event.target.value
        })
    }

    componentDidMount() {
        if (this.state.searchInput.length > 0 ) {
            showServices.getSearchShows(this.state.searchInput)
                .then(shows => {
                    this.setState({
                        shows
                    })
    
                })
        }

    }

    renderShowsDropdown() {
        const { shows } = this.state;
        return shows.map((show, index) => {
            return (
                <li key={index}>
                    <Link to={`/shows/${show.id}`} >{show.name}</Link>
                </li>
            )
        })
    }

    render() {
        const { shows } = this.state;
        return (
            <form className="form-inline">
                <input className="form-control mr-sm-2 search-box" type="search" value={this.state.searchInput} placeholder="Search" aria-label="Search" onChange={(e) => this.onSearch(e)} />
                <div className="search-dropdown">
                    <ul className="dropdown-ul">
                       {shows? this.renderShowsDropdown(): null} 
                    </ul>
                </div>
            </form>
        );
    }
}

export default SearchShows;