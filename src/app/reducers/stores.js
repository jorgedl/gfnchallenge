import { STORES_FETCHED } from '../actionTypes';

function getFetchedStores({ stores: fetchedStores }) {
    return fetchedStores;
}

function stores(state = [], action) {
    const { type } = action;

    if (type === STORES_FETCHED) {
        return getFetchedStores(action);
    }

    return state;
}

export default stores;
