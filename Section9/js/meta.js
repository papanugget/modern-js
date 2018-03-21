let re;

//Literal chars
re = /hello/;
re = /hello/i; //case insensitive

//Meta chars symbols
re = /^h/i;  //must start with 'h'
re = /d$/i;  //must end with 'd'
re = /^hello$/i;  //must begin and end with 'hello'
re = /^h.llo$/i;  //matches any one char
re = /h*llo/i;  //matches any character 0 or more times
re = /gre?a?y/i;  //optional characters 'grey' or 'gray'
re = /gre?a?y\?/i;

//Brackets [] = Character Sets
re = /gr[ae]y/i;  //must be a or e
re = /[GF]ray/i;  //must be a G or F
re = /[^GF]ray/i; //match anything except for G or F
re = /[A-Z]ray/;  //match any uppercase letter
re = /[a-z]ray/;  //match any lowercase letter
re = /[A-Za-z]ray/;  //match any case letter
re = /[0-9]ray/;  //match any digit 0-9

//Braces {} = Quantifiers
re = /Hel{2}o/i;  //checks if there are 2 'l' {2} goes after letter to check for
re = /Hel{2,4}o/i; //checks ranges of 2-4 'l' 
re = /Hel{2,}o/i;   //checks for at least 2 occurrences of 'l'

//Parentheses = grouping
re = /^([0-9]x){3}$/;

//Shorthand character classes
re = /\w/;  //word character  - alphanumeric char or _
re = /\w+/;  //word character + = one or more
re = /\W/;  //non word characters
re = /\d/;  //match any digit
re = /\d+/;  //match any digit 0 or more times
re = /\D/;  //non digits
re = /\s/;  //match whitespace character
re = /\S/;  //match non whitespace character
re = /Hell\b/;  //word boundary - matches exact phrase 'Hell' not 'Hello'

//Assertions 
re = /x(?=y)/; //match x only if followed by y
re = /x(?!y)/; //match x only if not followed by y

// string to match
const str = 'x123489';

//log result
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    } else {
        console.log(`${str} does NOT match ${re.source}`)
    }
}

reTest(re, str);