let regex;
regex = /hello/;
regex = /hello/i; //i = case insensitive
// regex = /hello/g; //g = global search


// console.log(regex);
// console.log(regex.source);

//exec() = return result in an array or null

// const result = regex.exec('hello world'); //will find match for 'hello' exactly not 'hell' not 'he'

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() = returns true or false
// const result = regex.test('Hello');

// console.log(result);

//match() = return result array or null
// const string = 'Hell There';
// const results = string.match(regex);

// console.log(results);

//search() = return index of the first match, if not found returns -1
// const str = 'Hello There';
// const result = str.search(regex);
// console.log(result);

//replace() = return a new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(regex, 'Hi');
console.log(newStr);