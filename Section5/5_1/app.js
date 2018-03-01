// Constructors and 'this' keyword

//object literal
// const jon = {
//       name: 'Jon',
//       age: 18,
//       wolf: 'Shadow'
// }

// console.log(jon);

//object constructors for multiple objects of the same type, should start with capital letter
//Person constructor
// function Person(name, lastName, wolf, dob){
//   this.name = name, //this refers to current scope of the function
//   // console.log(this);
//   this.lastName = lastName,
//   this.wolf = wolf,
//   this.birthday = new Date(dob);
//   this.calcAge = function(){
//     const diff = Date.now() - this.birthday.getTime();  //current dateTime - birthday
//     const ageDate = new Date(diff); //built in constructor Date takes diff as param
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//    }
// } 

const jon = new Person('Jon', 'Snow', 'Shadow', '9-10-2000');
const arya = new Person('Arya', 'Stark', 'Nimeria', '9-9-2003');

// console.log(jon.calcAge());
// console.log(arya.calcAge());
console.log(this);  //global scope refers to window object

// Built in constructors
//string
const name1 = 'Brandon';
const name2 = new String('Brandon'); //creates a string Object

name2.foo = 'bar';
console.log(name1);
console.log(name2);

console.log(typeof name1);  //string
console.log(typeof name2);  //object

if(name2 === 'Brandon'){
  console.log('Yes');
} else {
  console.log('No');
}

// number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);  //object

// boolean
const bool1 = true;
const bool2 = new Boolean(false);

console.log(bool2);

// function
const getSum1 = function(x, y){
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

console.log(getSum1(1,1));
console.log(getSum2());

//objects
const ned = {
  name: 'Eddard'
};

const ned2 = new Object({name: 'Eddard'});

console.log(ned);
console.log(ned2);

//array
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(5, 6, 7, 8);

console.log(arr1);
console.log(arr2);

//regexp
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1);
console.log(re2);

//Prototypes

//Object.prototype
//Person.prototype
function Person(firstName, lastName, wolf, dob){
  this.firstName = firstName, //this refers to current scope of the function
  // console.log(this);
  this.lastName = lastName,
  this.wolf = wolf,
  this.birthday = new Date(dob);
  // this.calcAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();  //current dateTime - birthday
  //   const ageDate = new Date(diff); //built in constructor Date takes diff as param
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  //  }
} 

//move calcAge function into prototype
Person.prototype.calcAge = function(){
  const diff = Date.now() - this.birthday.getTime(); 
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const theon = new Person('Theon', 'Greyjoy', 'None', '9-1-2000');
const sansa = new Person('Sansa', 'Stark', 'Lady', '9-2-2001');
console.log(theon);
console.log(sansa);

console.log(theon.calcAge());
console.log(sansa.getFullName());
sansa.getsMarried('Littlefinger');

console.log(sansa.getFullName());

console.log(sansa.hasOwnProperty('firstName'));  //true
console.log(sansa.hasOwnProperty('getFullName')); //false exists in prototype not in Person object itself
