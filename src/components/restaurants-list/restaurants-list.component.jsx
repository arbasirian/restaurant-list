import React from 'react'
import './restaurants-list.style.scss';
import RestaurantItem from '../restaurant-item/restaurant-item.component';
import { selectRestaurantsList } from '../../redux/restaurants/restaurants.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


const RestaurantsList = ({ restaurants }) => {
    return (
        <div className="restaurants-list">
            {
                restaurants.map(({ data }) => <RestaurantItem key={data.id} restaurantInfo={ data } />)
            }
            
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    restaurants: selectRestaurantsList,
})
export default connect(mapStateToProps)(RestaurantsList);