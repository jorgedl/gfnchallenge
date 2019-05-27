import httpClient from '../httpClient';
import { STORES_FETCHED } from '../actionTypes';

function fetchStores() {
    return async dispatch => {
        const url = '/stores/';
        const { data } = await httpClient.get(url);
        // I'm bindinding index as an id into each item in order to control them later with leaflet markers
        const stores = data.map((store, i) => ({ ...store, id: i }));
        dispatch({ stores, type: STORES_FETCHED });
    };
}

function updateStores() {
    return async dispatch => {
        const url = '/stores';
        const { data } = await httpClient.get(url);
        dispatch({ stores: data, type: STORES_FETCHED });
    };
}

export { fetchStores, updateStores };
