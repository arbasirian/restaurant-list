import React, { useState } from 'react';
import './filter-list.style.scss';

const FilterList = () => {
    const [filter, setFilter] = useState('')
    return (
        <div className="filter-list">
            <div className={ filter === 'test' ? 'filter-item active' : 'filter-item' }  onClick={ () => setFilter('test') }>
                <span>1 بالاترین امتیاز</span>
            </div>
            <div className="filter-item">
                <span>بالاترین امتیاز</span>
            </div>
            <div className="filter-item">
                <span>بالاترین امتیاز</span>
            </div>
            <div className="filter-item">
                <span>بالاترین امتیاز</span>
            </div>
        </div>
    )
}

export default FilterList;