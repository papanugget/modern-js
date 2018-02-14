// console.log("2_1 connected!");
// console.log("there is something here!");
// var greeting = "Hello world!";
// console.log(greeting);
// console.log([1, 2, 3, 4, 5, 6]);
// console.log({ a: 1, b: 2, c: 3 });
// console.table({ a: 1, b: 2, c: 3 });

// console.error("This is an error");
// console.clear();
// console.warn("This is a warning!");
// console.time("timer");
// console.log("there is something here!");
// console.log("there is something here!");
// console.log("there is something here!");
// console.log("there is something here!");
// console.log("there is something here!");
// console.log("there is something here!");
// console.log("there is something here!");
// console.log("there is something here!");
// console.timeEnd("timer");
// //var, let, const
// var name = "WillyD";
// console.log(name);
// name = "Johnson";
// console.log(name);

// //init var
// var greeting2;
// console.log(greeting2);
// var greeting2 = "Buenos dias";
// console.log(greeting2);

// //letters, numbers, _, $
// //cannot start with numbers


// //LET
// let name2;
// name2 = 'john doe';
// console.log(name2);
// name2 = 'richard rowe';
// console.log(name2);

// //CONST
// const name3 = "Jon Snow";
// console.log(name3);
// //cannot reuse const after declaration
// //const name3 = "Brandon Stark"; will have a name3 already declared error
// // const name3 = "brandon stark";
// //const has to have value cannot be initialized without one
// const name4 = {
//     name: "Jon Snow",
//     father: "Eddard Stark"
// };
// console.log(name4);

// name4.name = "Brandon Stark";
// console.log(name4);

// const nums = [1, 3, 5, 7];
// console.log(nums);
// nums.push(9);
// console.log(nums);

// //Primitive

// //String
// const name5 = "Jack Reacher";
// console.log(typeof name5);
// //Number
// const age = 56;
// console.log(typeof age);
// //Boolean
// const hasKids = true;
// console.log(hasKids);
// //Null
// const car = null;
// console.log(typeof car);
// //undefined
// let test;
// console.log(typeof test);
// //symbol
// const sim = Symbol();
// console.log(sim);

// //Reference Tyoes - Objects
// //Array
// const hobbies = ['music', 'movies'];
// console.log(typeof hobbies);
// //Object
// const address = {
//     street: "6707 Yellowstone Blvd",
//     city: "Forest Hills",
//     state: "NY"
// }
// console.log(typeof address);
// //Date
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// //Type conversion / Type coercion
// let val;
// //number to string
// val = 5;
// val = String(5);
// val = String(4 + 4);
// //boolean to string
// val = String(true);
// //date to string
// val = String(new Date());
// //array to string
// val = String([1, 3, 4, 6]);
// //toString()
// val = (5).toString();
// val = (true).toString();
// //string to number
// val = "15";
// val = Number("15");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("Hello");
// val = Number([1, 2, 3, 4]);
// val = parseInt("100");

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

// //Type Coercion
// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// //Numbers / Math object
// const num1 = 100;
// const num2 = 50;
// let sum1;

// //simple math with numbers
// sum1 = num1 + num2;
// sum1 = num1 * num2;
// sum1 = num1 - num2;
// sum1 = num1 / num2;
// sum1 = num1 % num2;

// //Math Object
// sum1 = Math.PI;
// sum1 = Math.E;
// sum1 = Math.round(2.8);
// sum1 = Math.ceil(2.4);
// sum1 = Math.floor(2.8);
// sum1 = Math.sqrt(64);
// sum1 = Math.abs(-13);
// sum1 = Math.pow(8,2);
// sum1 = Math.min(2, 33, 546, 12);
// sum1 = Math.max(2, 33, 546, 12);
// sum1 = Math.random();
// sum1 = Math.floor(Math.random() * 20 + 1);

// console.log(sum1);

// //String Methods & Concatenation
// const firstName = "Jon";
// const lastName = "Snow";
// const age2 = 41;
// const str = 'Hello there, my name is Jonas';
// const tags = 'web design, web development, programming'

// let val3;

// //concatenation
// val3 = firstName + lastName;

// val3 = firstName + " " + lastName;

// //append
// val3 = "Eddard";
// val3 += " Stark";

// val3 = "Hello , my name is " + firstName + " and I am " + age2;

// //escaping
// val3 = 'That\'s aweseome I can\'t wait';

// //length
// val3 = firstName.length;

// //concat
// val3 = firstName.concat(' ', lastName);

// //change case
// val3 = firstName.toUpperCase();
// val3 = lastName.toLowerCase();

// val3 = firstName[2];

// //indexof
// val3 = lastName.indexOf('w');
// //lastindexof
// val3 = lastName.lastIndexOf('w');
// //charAt
// val3 = firstName.charAt('1');
// //last char
// val3 = firstName.charAt(firstName.length -1);
// //substring
// val3 = lastName.substr(0, 2);
// //slice
// val3 = lastName.slice(0, 3);
// //split
// val3 = str.split(' ');
// val3 = tags.split(',');
// //replace
// val3 = str.replace('Jonas', 'Jack');
// //includes
// val3 = str.includes('Hello');
// console.log(val3);

// //Template literals
// const name = 'Brandon';
// const age = '15';
// const job = 'heir to House Stark';
// const city = 'Winterfell';
// let html;

// //without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

// function hello(){
//         return 'hello';
// }
// //with template strings
// html = `<ul>
//                 <li>Name: ${name}</li>
//                 <li>Age: ${age}</li>
//                 <li>Job: ${job}</li>
//                 <li>City: ${city}</li>
//                 <li>${2 + 2}</li>
//                 <li>${hello()}</li>
//                 <li>${age < 10 ? 'Over 10 years old' : 'Under 10 years old'}</li>
//         </ul>
// `

// document.body.innerHTML = html;

//Arrays & Array Methods

//create some arrays
//  const numbs = [11,24,36,48,50,656];
//  const numbs2 = new Array(33, 23, 44, 65, 8, 2);
//  const fruit = ['Mango', 'Banana', 'Watermelon', 'Orange', 'Apple'];
//  const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// //  console.log(mixed);
// let val;

// //get array length
// val = numbs.length;
// //check if is array
// val = Array.isArray(numbs);
// //get single value;
// val = numbs[2];
// //insert into array
// numbs[2] = 100;
// //find index of value 
// val = numbs.indexOf(656);

//mutating arrays
//adding onto end
// numbs.push(999);
// //adding onto front
// numbs.unshift(111);
// //remove from end
// numbs.pop();
// //remove from front
// numbs.shift();
// //splice values
// numbs.splice(1, 1); //removes 24
// //reverse array
// numbs.reverse();

//concat arrays
// val = numbs.concat(numbs2);
// //sort array
// val = fruit.sort();
// // val = numbs.sort();
// //use compare function
// // val = numbs.sort(function(x, y){
// //         return x -y; //compares each element against each other as a string
// // });
// // //reverse sort
// // val = numbs.sort(function(x, y) {
// //         return y - x;
// // });
// //find in an array
// function under50(num){
//         return num < 50;
// }
// val = numbs.find(under50); //finds first element that fulfills criteria

// console.log(numbs);
// console.log(val);

//Object Literals

// const person = {
//         firstName: 'Arya',
//         lastName: 'Stark',
//         age: 14,
//         wolf: 'Nimeria',
//         hobbies: ['swordplay', 'assassinations'],
//         address: {
//                 city: 'Braavos',
//                 state: 'Essos'
//         },
//         killSomeone: function(){
//                 // return 'Valar morghulis';
//                 return 2017 - this.age; //this = parent object 'person'
//         }
// }

// let val;

// val = person;
// //get specific value
// val = person.firstName;
// //or
// val = person['firstName'];
// val = person.wolf;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.killSomeone();

// // console.log(val);

// const people = [
//         {name: 'Jon Snow', age: 21},
//         {name: 'Theon Greyjoy', age: 22},
//         {name: 'Sansa Stark', age: 16},
//         {name: 'Brandon Stark', age: 13}
// ];

// val = people;
// val = people[0].name;
// val = people[1].age;
// val = people[2]['name'];

// for(let i = 0; i < people.length; i++){
//         console.log(people[i].name);
// }

//Date & Time Objects