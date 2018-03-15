console.log('Custom AJAX Library connected');

//instantiate easyHTTP
const http = new easyHTTP();

//get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//create data
const data = {
    title: "Custom Post",
    body: "This is a custom post for testing"
};

//post data
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(response)
//     }
// });

//update / put data
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
})