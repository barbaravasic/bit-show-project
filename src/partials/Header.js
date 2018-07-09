import React from 'react';
import SearchShows from '../components/SearchShows';
import { Link } from 'react-router-dom';


import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <Link to='/' className="navbar-brand my-brand">BitShow</Link>
            <SearchShows />
        </div>
    </nav>

    );
};

export default Header;