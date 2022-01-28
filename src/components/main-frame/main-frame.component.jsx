import React from 'react';
import './main-frame.styles.css';
import { CityCard } from '../city-card/city-card.component';

export const MainFrame = props => (
    <div className='main-frame'>
        <CityCard place = {props.place} weather = {props.weather}/>
    </div>
);