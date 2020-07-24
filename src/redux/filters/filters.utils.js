export const convertFiltersToMap = filters => {    
    const {restaurantFilters} = filters.find(({value}) => value === 'sortings');
    return restaurantFilters;
}