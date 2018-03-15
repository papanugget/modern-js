console.log('es6 promises connected!');

const posts = [
    {title:"Post one", body: "This is post one"},
    {title:"Post two", body: "This is post two"},    
];
// Asynchronous 
// callback can be named anything
// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post)
//         callback();
//     }, 2000)
// }
// using es6 promises
function createPost(post){
    //create promise with 2 params
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post)
            const error = false;
            if(!error){
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 2000)
    });
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
createPost({title: "Post three", body:"This is post three"})
//promise then getPosts
.then(getPosts)
//if rejected throw an error message
.catch(function(error){
    console.log(error)
});

