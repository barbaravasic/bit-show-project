import React from 'react';

import './ShowDescription.css'

const ShowDescription = ({description}) => {
    return (
        <div className='row description'>
                    <div className='col-12'>
                        <h4>Show Description</h4>
                        <p>{description}</p>
                    </div>
                </div>
    );
};

export default ShowDescription;