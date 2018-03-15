console.log('Arrow functions connected');

//function expression
// const sayHello = function(){
//     console.log('Hello');
// }

//arrow function expression
// const sayHello = () => {
//     console.log('Hello Arrows!');
// }

//Single line arrow function expression does not need {}
// const sayHello = () => console.log('Hello single line arrows!');
// sayHello();

//single line returns 'Hello' string
// const sayHello = () => 'Hello return statement';

//same as above
// const sayHello = function(){
//     return 'Hello return statement';
// }

//returning object literals need parentheses
// const sayHello = () => ({ msg: "Hello"});

//parentheses aren't needed for single parameters 'name'
// const sayHello = name => console.log(`hello ${name}`)

//parentheses are needed for more than one parameter 'firstName' 'lastName'
// const sayHello = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`)

// sayHello('dipshit', 'mcgoo');

// const users = ['Jon', 'Arya', 'Sansa', 'Robb', 'Brandon', 'Rickon'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

//with arrow functions - shortest version
// const nameLengths = users.map(name => name.length);

// console.log(nameLengths);

//Fetch API done with arrows
// console.log('Fetch API connected!');

//recreate easyHTTP library with Fetch
//UI vars
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

//Arrow functions
function getText(e){
    fetch('./js/test.txt')
    .then(response => response.text())
    .then(data => document.getElementById('output').innerHTML = `<h3>${data}</h3>`)
    .catch(error => console.log(error));
    e.preventDefault();
}

function getJSON(e){
    fetch('./js/customers.json')
    .then(response => response.json())
    .then((data) => {
        let output = '';
        // console.log(data);
        data.forEach((customer) => {
            output += `
                <ul>
                    <li>Name: ${customer.name}</li>
                    <li>ID: ${customer.id}</li>
                    <li>Company: ${customer.company}</li>                   
                    <li>Phone: ${customer.phone}</li>
                    <li>Comment: ${customer.comment}</li>                    
                </ul>
                `;
                document.getElementById('output').innerHTML = output;
        })
    })
    .catch(error => console.log(error));
    e.preventDefault();
}

function getAPI(e){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then((data) => {
        let output = '';
        // console.log(data);
            output += ` 
                <ul>
                    <li><img src="${data.icon_url}"> ${data.value}</li>
                </ul>
            `;
            document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
    e.preventDefault();
}