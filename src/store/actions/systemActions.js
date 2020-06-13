import {SYSTEM_CURRENT_NAV} from '../actionTypes';

export function changeNavAction(payload) {
    return {type: SYSTEM_CURRENT_NAV, newData: payload}
}