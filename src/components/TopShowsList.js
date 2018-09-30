import React from 'react';
import TopShowsItem from './TopShowsItem';

import './TopShowsList.css'

const TopShowsList = (props) => {
    const { top50 } = props;

    const renderTop50Shows = () => {
        if (!top50) {
            return <h3>...</h3>
        } else {
            return top50.map((show, index) => {
                return <TopShowsItem show={show} key={index} />
            })
        }
    }
    return (
        <React.Fragment>
            <div className='row'>
                <h2 className='main-title'>Top 50 shows</h2>
            </div>
            <div className='row justify-content-center all-shows'>
                {renderTop50Shows()}
            </div>
        </React.Fragment>
    );
};

export default TopShowsList;