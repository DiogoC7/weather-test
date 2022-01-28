import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange, handleSearch}) => (
    <form className='search-box-container' onSubmit={handleSearch}>
        <input onChange={handleChange} className='search-box' type = 'search' placeholder = {placeholder}/>
        <button className='search-button' type='submit'>Pesquisar</button>
    </form>
);