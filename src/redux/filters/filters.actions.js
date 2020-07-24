import FiltersActionTypes from './filters.types';

export const fetchFilters = () => ({
    type: FiltersActionTypes.FETCH_FILTERS,
});
export const fetchFiltersSuccess = filters => ({
    type: FiltersActionTypes.FETCH_FILTERS_SUCCESS,
    payload: filters
});
export const fetchFiltersFailure = errorMessage => ({
    type: FiltersActionTypes.FETCH_FILTERS_FAILURE,
    payload: errorMessage
});

