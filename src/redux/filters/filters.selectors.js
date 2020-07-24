import { createSelector } from 'reselect';

const selectFilters = state => state.filters;

export const selectFiltersList = createSelector(
    [selectFilters],
    filters => filters.filtersList
);
export const selectCurrentFilter = createSelector(
    [selectFilters],
    filters => filters.currentFilter
);