console.log('Easy HTTP2 connected');

// //ES5 AJAX version
// function easyHTTP(){
//     //like const xhr = new XMLHttpRequest();
//     this.http = new XMLHttpRequest();
// }
// // Make a HTTP GET request
// easyHTTP.prototype.get = function(url, callback){
//     //like xhr.open
//     this.http.open('GET', url, true);
//     let self = this;
//     this.http.onload = function(){
//         if(self.http.status === 200){
//            callback(null, self.http.responseText);
//         } else {
//             callback('Error: ' + self.http.status);
//         }
//     };
//     this.http.send();
// }
// // Make a HTTP POST request
// easyHTTP.prototype.post = function(url, data, callback){
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json')
//     let self = this;
//     this.http.onload = function(){
//         callback(null, self.http.responseText);
//     }
//     this.http.send(JSON.stringify(data));
// }
// // Make a HTTP PUT request
// easyHTTP.prototype.put = function(url, data, callback){
//     this.http.open('PUT', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json')
//     let self = this;
//     this.http.onload = function(){
//         callback(null, self.http.responseText);
//     }
//     this.http.send(JSON.stringify(data));
// }
// // Make a HTTP DELETE request
// easyHTTP.prototype.delete = function(url, callback){
//     //like xhr.open
//     this.http.open('DELETE', url, true);
//     let self = this;
//     this.http.onload = function(){
//         if(self.http.status === 200){
//            callback(null, 'Post deleted');
//         } else {
//             callback('Error: ' + self.http.status);
//         }
//     };
//     this.http.send();
// }
//ES6 Class constructor
class EasyHTTP2 {
    //GET Method
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }
    //POST Method
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }
    //PUT Method
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }
    //DELETE Method
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(() => resolve('Resource deleted...'))
            .catch(error => reject(error));
        });
    }
}