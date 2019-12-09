import { SEARCH_FIELD } from '../constants/constants';


export const changeSearchFieldInput = (text)=> ({
    type: SEARCH_FIELD,
    payload: text
});
