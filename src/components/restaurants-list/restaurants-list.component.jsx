import React from 'react'
import './restaurants-list.style.scss';
import RestaurantItem from '../restaurant-item/restaurant-item.component';

const RestaurantsList = () => {
    return (
        <div className="restaurants-list">
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
            <RestaurantItem />
        </div>
    )
}

export default RestaurantsList;