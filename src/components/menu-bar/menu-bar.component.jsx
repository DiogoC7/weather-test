import React from 'react';
import logo from '../../assets/img/logo.JPG';
import './menu-bar.styles.css';

export const MenuBar = props => (
    <div className='menu-bar'>
        <img src={logo} className='logo'/>
        <div>{props.children}</div>
    </div>
);