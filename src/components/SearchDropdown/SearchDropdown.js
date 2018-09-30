import React from 'react';
import { Link } from 'react-router-dom';

import './SearchDropdown.css'


const SearchDropdown = (props) => {

    const filterShows = () => {
        const { shows, searchInput } = props;
        if (shows) {
            const listOfSearchedSuggestions = [];
            shows.forEach(show => {
                const lowerCasedName = show.name.toLowerCase();
                if (lowerCasedName.includes(searchInput)) {
                    listOfSearchedSuggestions.push(show);
                }
            })
            return listOfSearchedSuggestions.slice(0, 10);
        }
    }


    const renderShowsDropdown = () => {
        const shows = filterShows();
        if (shows && props.searchInput !== "") {
            return (
                <div className={`search-dropdown`}>
                    <ul className="dropdown-ul">
                        {shows.map((show, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/shows/${show.id}`} onClick={props.clearSearchInput}>{show.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <React.Fragment>
            {renderShowsDropdown()}
        </React.Fragment>

    );

}


export default SearchDropdown;