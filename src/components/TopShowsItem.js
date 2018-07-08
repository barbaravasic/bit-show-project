import React from 'react';
import { Link } from "react-router-dom";


const TopShowsItem = (props) => {
    const { id, posterUrl, name } = props.show;
    return (
        <div className='col-12 col-md-6 col-lg-4 show' id={id}>
            <Link to={`/shows/${id}`} > 
                <img src={posterUrl} />
                <h3 className='show-title'>{name}</h3>
            </Link>
        </div>
    );
};

export default TopShowsItem;