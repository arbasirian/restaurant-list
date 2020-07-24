import {combineReducers} from 'redux';
import restaurantsReducer from './restaurants/restaurants.reducer';
import filtersReducer from './filters/filters.reducer';

const rootReducer = combineReducers({
    filters: filtersReducer,
    restaurants: restaurantsReducer

});

export default rootReducer;