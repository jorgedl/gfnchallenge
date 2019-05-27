import { SET_PAGE, UPDATE_PAGE_COUNTER } from '../actionTypes';

function setPage(pageNumber) {
    return dispatch => {
        dispatch({ currentPage: pageNumber, type: SET_PAGE });
    };
}

function updatePageCounter(registers) {
    return dispatch => {
        dispatch({
            totalPages: registers,
            type: UPDATE_PAGE_COUNTER
        });
    };
}

export { setPage, updatePageCounter };
