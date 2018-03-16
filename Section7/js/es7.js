console.log('ES7 Connected');

// async function myFunc(){
//     // return 'Hello';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello this is resolved'), 1000)
//     });

//     const error = false;
//     if(!error) {
//         const response = await promise;  //wait till promise is reolved
//         return response;
//     } else {
//         await Promise.reject(new Error('something went wrong'));
//     }
// }

// // console.log(myFunc());

// myFunc()
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

async function getUsers(){
    //await response from url of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //only proceed once its resolved
    const data = await response.json();
    //only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));