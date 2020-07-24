
import { call, put, takeLatest } from 'redux-saga/effects';
import FiltersActionTypes from './filters.types';
import { fetchFilters } from '../../services/main';
import { convertFiltersToMap } from './filters.utils';
import { fetchFiltersSuccess, fetchFiltersFailure } from './filters.actions';

export function* fetchFiltersAsync() {
    try {
        const filterList = yield fetchFilters();
        const list = yield call(convertFiltersToMap, filterList);
        yield put(fetchFiltersSuccess(list));
    } catch(error) {
        yield put(fetchFiltersFailure(error.message));

    }

}

export function* startFetchFilters() {
    yield takeLatest(
        FiltersActionTypes.FETCH_FILTERS,
        fetchFiltersAsync
    )
}