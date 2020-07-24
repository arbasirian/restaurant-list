import React, { useState } from 'react';
import './filter-list.style.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectFiltersList } from '../../redux/filters/filters.selectors'
import { fetchRestaurants } from '../../redux/restaurants/restaurants.actions';

const FilterList = ({ filters, fetchRestaurants }) => {
    const [filter, setFilter] = useState('');
    return (
        <div className="filter-list">
            {
                filters.map(({ title, value }) => (
                    <div key={ value } className={ filter === value ? 'filter-item active' : 'filter-item' }  onClick={ () => {
                        setFilter(value);
                        fetchRestaurants(value)
                    }}>
                        <span>{ title }</span>
                    </div>
                ))
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: (filter) => dispatch(fetchRestaurants(filter)),
})
const mapStateToProps = createStructuredSelector({
    filters: selectFiltersList,
})
export default connect(mapStateToProps, mapDispatchToProps)(FilterList);