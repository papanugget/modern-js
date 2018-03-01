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
function Person(name, lastName, wolf, dob){
  this.name = name, //this refers to current scope of the function
  // console.log(this);
  this.lastName = lastName,
  this.wolf = wolf,
  this.birthday = new Date(dob);
  this.calcAge = function(){
    const diff = Date.now() - this.birthday.getTime();  //current dateTime - birthday
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
} 

const jon = new Person('Jon', 'Snow', 'Shadow', '9-10-2000');
const arya = new Person('Arya', 'Stark', 'Nimeria', '9-9-2003');

console.log(jon.calcAge());
console.log(arya.calcAge());
console.log(this);  //global scope refers to window object

