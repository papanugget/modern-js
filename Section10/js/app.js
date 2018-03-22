console.log('Iterators & Generators Connected!');

//Iteratror example
function nameIterator(names){  //pass in names array
    let nextIndex = 0; //index starts at 0
    return {
        next: function(){ //function expression
            return nextIndex < names.length ?  //while nextIndex is less than the length of array
            {value: names[nextIndex++], done: false} : //keep iterating and returning object with the index value and done bool
            {done: true} //when nextIndex = array length return object of done bool
        }
    }
}

//create an array of names
const namesArr = ['Eddard', 'Catelyn', 'Robb', 'Jon', 'Sansa', 'Brandon', 'Rickon', 'Arya'];
//init iterator and pass in names array
const names = nameIterator(namesArr);

console.log(names.next());  //Eddard
console.log(names.next());  //Catelyn
console.log(names.next());  //Robb ...

//Generator exmaple = functioN* <-- tells JS this is a generator
function* sayNames() {
    yield 'Tywin';
    yield 'Cersei';
    yield 'Jamie';
    yield 'Tyrion';
}

const name = sayNames();

console.log(name.next());  //Tywin
console.log(name.next());  //Cersei
console.log(name.next());  //Jamie...

//ID Creator
function* createIds(){
    //id starts at 0
    let index = 0;
    //always true so always executes
    while(true){
        //adds 1 to ID on each iteration
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value);  //0
console.log(gen.next().value);  //1
console.log(gen.next().value);  //2
console.log(gen.next().value);  //3...
