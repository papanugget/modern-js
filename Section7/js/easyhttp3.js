// //ES6 Class constructor
// class EasyHTTP2 {
//     //GET Method
//     get(url){
//         return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => resolve(data))
//                 .catch(error => reject(error));
//         });
//     }

//ES7 refactor with Async Await
class EasyHTTP3 {
    //make an HTTP GET request
    async get(url) {
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }
//     //POST Method
//     post(url, data){
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(error => reject(error));
//         });
//     }
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
//     //PUT Method
//     put(url, data){
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(error => reject(error));
//         });
//     }
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
//     //DELETE Method
//     delete(url){
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-type': 'application/json'
//                 }
//             })
//             .then(response => response.json())
//             .then(() => resolve('Resource deleted...'))
//             .catch(error => reject(error));
//         });
//     }
// }
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

