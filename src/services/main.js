import Axios from "axios"

// fetch All Filters

export const fetchFilters = () => {
    return Axios.get(`https://snappfood.ir/mobile/v2/restaurant/filters`)
        .then(({ data }) => {
            const { restaurantFilterTypes } = data.data;
            return restaurantFilterTypes
    });
}
export const fetchResturants = (filter = '') => {    
    return Axios.get(`https://snappfood.ir/mobile/v2/restaurant/vendors-list?filters={"Sortings":["${filter}"]}`)
        .then(({ data }) => {
            const restaurants = data.data;
            return restaurants;
    });
}