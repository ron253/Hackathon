
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data);
        if (!response.ok) {
            

            const error = (data && data.message) || response.statusText;
            console.log("Message handle response " + data.message);
            return Promise.reject(error);
        }
        return data;
    });
}





export const commonService = {
    apiUrl: "http://localhost:5000",
    handleResponse
}