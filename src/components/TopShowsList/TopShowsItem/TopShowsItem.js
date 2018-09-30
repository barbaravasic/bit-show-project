import React from 'react';
import { Link } from "react-router-dom";

import './TopShowsItem.css'


const TopShowsItem = (props) => {
    const { id, posterUrl, name } = props.show;
    return (
        <div className='col-6 col-md-4 col-lg-3 show' id={id}>
            <Link to={`/shows/${id}`} >
                <div className='show-poster' style={{backgroundImage: `url(${posterUrl})`}}></div>
                <h3 className='show-title'>{name}</h3>
            </Link>
        </div>
    );
};

export default TopShowsItem;