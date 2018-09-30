import React, { Component } from 'react';
import { showServices } from '../../services/ShowServices'
import SearchDropdown from '../SearchDropdown/SearchDropdown';

import './SearchShows.css'


class SearchShows extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            shows: null,
        }
        this.clearSearchInput = this.clearSearchInput.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }

    onSearch(event) {
        event.preventDefault();
        this.setState({
            searchInput: event.target.value
        })
    }

    clearSearchInput() {
        this.setState({
            searchInput: ""
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
                <input className="form-control mr-sm-2 search-box" type="search" value={this.state.searchInput} placeholder="Search" aria-label="Search" onChange={this.onSearch} />
                <SearchDropdown shows={this.state.shows} searchInput={this.state.searchInput} hide={this.state.hide} clearSearchInput={this.clearSearchInput}/>
            </form>
        );
    }
}

export default SearchShows;