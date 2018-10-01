import React from 'react';

import './SeasonsList.css'

const SeasonsList = ({seasons}) => (
        <div className='row'>
            <div className='col-12 seasons'>
                <h4 className="">Seasons {seasons.length}</h4>
                    <ul>
                        {seasons.map((season, i) => (
                        <li key={i}>{season.startDate} - {season.endDate}</li>))}
                    </ul>
            </div>
        </div>
    );

export default SeasonsList;