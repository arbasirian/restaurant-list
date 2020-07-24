import React, { Component } from 'react'
import HeaderSection from '../../components/header-section/header-section.component';
import RestaurantsList from '../../components/restaurants-list/restaurants-list.component';
import { connect } from 'react-redux';
import { fetchFilters } from '../../redux/filters/filters.actions';
import { fetchRestaurants } from '../../redux/restaurants/restaurants.actions';
class HomePage extends Component {
    componentDidMount() {
        const { fetchFilters, fetchRestaurants } = this.props;
        fetchFilters();
        fetchRestaurants('');
    }
    render() {
        return (
            <div className="home-page">
                <HeaderSection />
                <RestaurantsList />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchFilters: () => dispatch(fetchFilters()),
    fetchRestaurants: (filter) => dispatch(fetchRestaurants(filter))
})
export default connect(null, mapDispatchToProps)(HomePage);