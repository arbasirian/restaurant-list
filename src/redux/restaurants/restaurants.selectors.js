import { createSelector } from 'reselect';

const selectRestaurants = state => state.restaurants;

export const selectRestaurantsList = createSelector(
    [selectRestaurants],
    restaurants => restaurants.restaurantslist
);