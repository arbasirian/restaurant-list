
import { put, takeLatest } from 'redux-saga/effects';
import { fetchResturants } from '../../services/main';
import RestaurantsActionTypes from './restaurants.types';
import { fetchRestaurantsSuccess, fetchRestaurantsFailure } from './restaurants.actions';

export function* fetchRestaurantsAsync({ payload }) {
    try {
        const restaurants = yield fetchResturants(payload);
        yield put(fetchRestaurantsSuccess(restaurants));
    } catch(error) {
        yield put(fetchRestaurantsFailure(error.message));

    }

}

export function* startFetchRestaurants() {
    yield takeLatest(
        RestaurantsActionTypes.FETCH_RESTAURANTS,
        fetchRestaurantsAsync
    )
}