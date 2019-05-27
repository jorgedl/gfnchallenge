import { SET_PAGE, UPDATE_PAGE_COUNTER } from '../actionTypes';

function changePage(state, { currentPage }) {
    return {
        ...state,
        currentPage
    };
}

function updatePageCounters(state, { totalPages: pages }) {
    const { pageSize } = state;
    const totalPages = Math.ceil(pages / pageSize);
    return {
        ...state,
        totalPages
    };
}

function stores(state, action) {
    const { type } = action;

    switch (type) {
        case UPDATE_PAGE_COUNTER:
            return updatePageCounters(state, action);
        case SET_PAGE:
            return changePage(state, action);
        default:
            return state;
    }
}

export default stores;
