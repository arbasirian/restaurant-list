import { all, call } from "redux-saga/effects";
import { startFetchFilters } from "./filters/filters.sagas";
import { startFetchRestaurants } from "./restaurants/restaurants.sagas";

export default function* rootSaga() {
    yield all([
        call(startFetchFilters),
        call(startFetchRestaurants)
    ]);

}