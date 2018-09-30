import React from 'react';

import './ActorsList.css'

const ActorsList = ({actors}) => {
    return (
        <div className='row'>
            <div className='col-12 actors'>
                <h4>Cast</h4>
                    <ul className='d-flex flex-column flex-wrap'>
                        {actors.map((actor, i) => <li key={i}>{actor.name}</li>)}
                    </ul>
            </div>
        </div>
    );
};

export default ActorsList;