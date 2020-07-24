import RestaurantsActionTypes from './restaurants.types';

export const fetchRestaurants = filter => ({
    type: RestaurantsActionTypes.FETCH_RESTAURANTS,
    payload: filter
});
export const fetchRestaurantsSuccess = restaurants => ({
    type: RestaurantsActionTypes.FETCH_RESTAURANTS_SUCCESS,
    payload: restaurants
});
export const fetchRestaurantsFailure = errorMessage => ({
    type: RestaurantsActionTypes.FETCH_RESTAURANTS_FAILURE,
    payload: errorMessage
});

