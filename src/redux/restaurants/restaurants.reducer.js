
import RestaurantsActionTypes from './restaurants.types';

const INITIAL_STATE = {
    count: 0,
    restaurantslist: [],
    error: null
}

const restaurantsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RestaurantsActionTypes.FETCH_RESTAURANTS_SUCCESS:
            return {
                ...state,
                restaurantslist: action.payload.finalResult,
                count: action.payload.count
            };
        case RestaurantsActionTypes.FETCH_RESTAURANTS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default: 
            return state;
    }
}

export default restaurantsReducer;