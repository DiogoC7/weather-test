import React from 'react';

export const CityCard = props => (
    <div className='city-card'>
        <img src={props.source} className='weather-img'/>
        <h1>{props.place}</h1>
        <span>{props.weather}ºC</span>
    </div>
);