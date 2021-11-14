
import {apiConstants} from "../constants/apiConstants"

import {ApiService} from "../services/ApiService"


import { history} from "../helpers/history";



const apiSubmission = (api, navigate)=> {
    const request = api => ({type: apiConstants.CREATE_API_REQUEST, api});
 
    const failure = api => ({type: apiConstants.CREATE_API_FAILURE, api});

    const success = api => ({type: apiConstants.CREATE_API_SUCCESS, api});

    
    return dispatch => {
   

         ApiService.submitApi(api)
            .then(
                data => {
                    
                    // console.log(`Api actions called ${JSON.stringify(data)}`)
                    dispatch(success(data))
                    // useNavigateFunc("/parkingResults")
                    navigate("/parkingResults")
                    // history.push("/parkingResults")
               
//                history.push("/userAuthentication")
                },
                error => {
                    dispatch(failure(error.toString()));

                }
            );


    }

}


export const apiActions = {
    apiSubmission

}
