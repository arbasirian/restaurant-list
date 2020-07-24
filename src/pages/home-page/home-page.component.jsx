import React, { Component } from 'react'
import HeaderSection from '../../components/header-section/header-section.component';
import RestaurantsList from '../../components/restaurants-list/restaurants-list.component';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <HeaderSection />
                <RestaurantsList />
            </div>
        )
    }
}

export default HomePage;