
import { commonService } from './CommonService';

const apiUrl = commonService.apiUrl;
const handleResponse = commonService.handleResponse;

export const ApiService = {
    submitApi
}

async function fetchApi() {
    let response = await fetch('/readme.txt');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}


async function submitApi(address) {

    const requestOptions = {
        method: 'GET',
        mode:'cors'
    };


    let response = await fetch(`${apiUrl}/search?address=` + address, requestOptions)
    let getResponse = await response.json()
    

    // if (response.status === 200) {
    //     let data = await response.success;
    //     console.log(data)
    //     return data
    //     // handle data
    // }

   
 
    return getResponse
 }