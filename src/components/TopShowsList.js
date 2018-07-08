import React from 'react';
import TopShowsItem from './TopShowsItem';

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
                <h1>Top 50 shows</h1>
            </div>
            <div className='row'>
                {renderTop50Shows()}
            </div>
        </React.Fragment>
    );
};

export default TopShowsList;