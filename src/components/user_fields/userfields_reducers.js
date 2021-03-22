import {PAGE_NUMBER} from './userfields_constants';

const initialState = {
    page: 1
}

export const pageNumber = (state=initialState, action) => {
    switch(action.type) {
        case PAGE_NUMBER:
            return Object.assign({}, state, {page: action.payload});
        default:
            return state;
    }
}