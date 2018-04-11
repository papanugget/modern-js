// //ES6 Class constructor
class EasyHTTP3 {
    async get(url) {
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }
//Make an HTTP POST request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        return responseData;
    }
//Make an HTTP PUT request
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        return responseData;
    }
//Make an HTTP DELETE request
    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const responseData = await 'Resource deleted...';
        return responseData;
    }
}

export const http = new EasyHTTP3();