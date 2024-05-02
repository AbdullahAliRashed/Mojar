import React from 'react';
import IconSearch from './Icon';
import './SearchBar.css'



const SearchBar = () => {
  return (
    <div className="search-button">
    <span>SEARCH</span>  
    <span className="search-icon">
        <IconSearch/>
        </span>  
  </div>
  );
};

export default SearchBar;