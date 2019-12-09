import { SEARCH_FIELD } from '../constants/constants';
// import { changeSearchFieldInput } from '../actions/actions';

const searchFieldState = {
    searchField: ''
}

export const changeSearchField = (state = searchFieldState, action = {})=>{
    switch (action.type) {
        case SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
    
        default:
            return state;
    }
}