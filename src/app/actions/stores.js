import { STORES_FETCHED } from '../actionTypes';
import * as data from '../../data.json';

function fetchStores() {
    return async dispatch => {
        // const { data } = await httpClient.get(url);
        // I'm bindinding index as an id into each item in order to control them later with leaflet markers
        const stores = data.stores.map((store, i) => ({ ...store, id: i }));
        dispatch({ stores, type: STORES_FETCHED });
    };
}

function updateStores() {
    return async dispatch => {
        // const { data } = await httpClient.get(url);
        dispatch({ stores: data.stores, type: STORES_FETCHED });
    };
}

export { fetchStores, updateStores };
