import {SYSTEM_CURRENT_NAV} from '../actionTypes';
const initState = {
    currentNav: ''
}
export default function systemReducer(state = initState, action) {
    switch (action.type) {
        case SYSTEM_CURRENT_NAV:
            return {...{}, ...state, ...{currentNav: action.newData}}
        default: 
            return state; 
    }
}