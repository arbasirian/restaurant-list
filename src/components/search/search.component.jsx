import React from 'react'
import search from '../../assets/images/search.svg';
import './search.style.scss';

const Search = () => {
    return (
        <div className="search-container">
            <input className="search-input" type="text" placeholder="جستجو در غذا، رستوران و..."/>
            <img src={search} alt="" className="search-icon"/>
        </div>
    )
}
export default Search;