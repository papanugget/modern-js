console.log('callback functions connected!');

const posts = [
    {title:"Post one", body: "This is post one"},
    {title:"Post two", body: "This is post two"},    
];

// Synchronous 
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     }, 2000)
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.getElementById('posts').innerHTML = output
//     }, 1000);
// }

// createPost({title: "Post three", body:"This is post three"});

// getPosts();


// Asynchronous 
// callback can be named anything
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post)
        callback();
    }, 2000)
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.getElementById('posts').innerHTML = output
    }, 1000);
}

// the callback is already called as a function in createPost so only name of callback function is needed not getPosts()
createPost({title: "Post three", body:"This is post three"}, getPosts);

