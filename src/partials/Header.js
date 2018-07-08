import React from 'react';
import SearchShows from '../components/SearchShows'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand my-brand">BitShow</a>
            <SearchShows />
        </div>
    </nav>

    );
};

export default Header;