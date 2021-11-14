import {combineReducers} from 'redux';

import {apiSubmission } from "./apiSubmissionReducer";

const rootReducer = combineReducers({

    apiSubmission
})

export {rootReducer};