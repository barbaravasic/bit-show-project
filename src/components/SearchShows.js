import React, { Component } from 'react';
import { showServices } from '../services/ShowServices'
import SearchDropdown from './SearchDropdown';


class SearchShows extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            shows: null,
        }
    }

    onSearch(event) {
        event.preventDefault();
        this.setState({
            searchInput: event.target.value
        })
    }

    componentDidMount() {
            showServices.getAllShows()
                .then(listOfAllShows => {
                    this.setState({
                        shows: listOfAllShows,
                    })
                })
        }

    render() {
        return (
            <form className="form-inline">
                <input className="form-control mr-sm-2 search-box" type="search" value={this.state.searchInput} placeholder="Search" aria-label="Search" onChange={(e) => { this.onSearch(e) }} />
                <SearchDropdown shows={this.state.shows} searchInput={this.state.searchInput} hide={this.state.hide}/>
            </form>
        );
    }
}

export default SearchShows;