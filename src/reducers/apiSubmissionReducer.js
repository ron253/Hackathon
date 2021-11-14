import {apiConstants} from "../constants/apiConstants"


export function apiSubmission(state = {}, action) {

    switch (action.type) {
        case apiConstants.CREATE_API_SUCCESS:
            return {
                ...state, 
                apiData: action.api
            }
        default:
            return state;
    }
}

