
import FiltersActionTypes from './filters.types';

const INITIAL_STATE = {
    filtersList: [],
    error: null
}

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FiltersActionTypes.FETCH_FILTERS_SUCCESS:
            return {
                ...state,
                filtersList: action.payload
            };
        case FiltersActionTypes.FETCH_FILTERS_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default: 
            return state;
    }
}

export default filtersReducer;