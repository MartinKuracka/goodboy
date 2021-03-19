import {
    REQUEST_LINKS_PENDING,
    REQUEST_LINKS_SUCCESS,
    REQUEST_LINKS_FAILED
} from './selecttype_constants';

const initialState = {
    isPending: false,
    shelters: [{
        id: '0',
        name: 'Nahravam utulky'
    }],
    error: '',
};

export const selectShelter = (state=initialState, action) => {
    switch(action.type) {
        case REQUEST_LINKS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_LINKS_SUCCESS:
            return Object.assign({}, state, {shelters: action.payload, isPending: false});
        case REQUEST_LINKS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
};

