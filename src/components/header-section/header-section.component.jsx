import React from 'react'
import FilterList from '../filter-list/filter-list.component';
import Search from '../search/search.component';
import './header-section.style.scss';

const HeaderSection = () => {
    return (
        <div className="header-section">
            <Search />
            <div className="filters-wrapper">
                <FilterList />
            </div>
        </div>
    )
}
export default HeaderSection;