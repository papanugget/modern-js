const user = {
    email: 'jdoe@email.com'
};

try {
    //produces a reference error
    // myFunction();

    //produce a type error
    // null.myFunction();

    //Syntax Error
    // console.log(eval('2+2'));
    // console.log(eval('hello world'));

    //URI Error
    // decodeURIComponent('%');
    if(!user.name){
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
    
} catch(error){
    console.log(`User Error: ${error.message}`);
    // console.log(`${error.name} It's URI Stupid`)
    // console.log(error);
    // console.log(error.message);
    // console.log(error.name);
    // console.log(error instanceof ReferenceError);
    // console.log(error instanceof TypeError);
} finally {
    console.log('Finally runs regardless of results');
}

console.log('Program continues');