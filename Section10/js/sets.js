console.log('ES6 Sets connected!');

//Sets - set of unique values of any type
const set1 = new Set();

//Add some values to set
set1.add(100);
set1.add('this is a string');
set1.add(true);
set1.add({name: 'Jackass'});
set1.add(100);  //will not add again as it already exists

const set2 = new Set([1, true, 'string', {age: 14}]);
console.log(set1);
console.log(set2);

//get size or count
console.log(set1.size);

//check for values
console.log(set1.has(100));  //true
console.log(set1.has(50+50)); //true
console.log(set1.has({name: 'Jackass'})); //false because of reference value not primitive

//delete from set
set1.delete(100);
console.log(set1);

//iterate thru sets
//for .. of loop
for(let item of set1){
    console.log(item);
}

//foreach
set1.forEach(function(item){
    console.log(item);
});

//convert set to array
const setArr = Array.from(set1);
console.log(setArr);