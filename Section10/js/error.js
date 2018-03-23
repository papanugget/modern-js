// console.log('Error handling connected');

// //ES6 destructuring assignment
// let a, b;
// [a, b] = [100, 200];
// //Rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500]

// console.log(rest);
 

// ({a, b} = {a: 100, b: 200, c:300, d:400, e:500});
// console.log(a,b);

// ({a, b, ...rest} = {a: 100, b: 200, c:300, d:400, e:500});
// console.log(rest);

// // Array destructuring
// // const people = ['Littlefinger', 'The Hound', 'Brienne', 'Roose'];

// // const [person1, person2, person3] = people;

// // console.log(person1, person2, person3);

// // Parse array returned from function
// function getPeople(){
//     return ['Littlefinger', 'The Hound', 'Brienne', 'Roose'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

//Object Destructuring

const person = {
    name: 'Jon Snow',
    age: 21,
    city: 'Winterfell',
    gender: 'Male',
    sayHello: function(){
        console.log('Hello');
    }
}

//old ES5
// const name = person.name,
//         age = person.age,
//         city = person.city,
//         gender = person.gender;

//new ES6 destructuring
const {name, age, city, sayHello } = person;

console.log(name, age , city);

sayHello();