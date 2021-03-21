import {SELECT_AMOUNT} from './selectamount_constants';

export const selectAmount = (text) => ({
    type: SELECT_AMOUNT,
    payload: text
});