const http = new EasyHTTP3();

//GET Users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));

const userData = {
    name: 'Dick Bagg',
    username: 'dickbag',
    email: 'dick@dickmail.com' 
}

//POST some data
// http.post('https://jsonplaceholder.typicode.com/posts', userData)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// //PUT some data
// http.put('https://jsonplaceholder.typicode.com/posts/2', userData)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// //DELETE some data
http.delete('https://jsonplaceholder.typicode.com/posts/2')
    .then(data => console.log(data))
    .catch(error => console.log(error));