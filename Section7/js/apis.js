console.log("External API's connected");

//UI vars and event listeners
 getJokes = document.querySelector('.get-jokes').addEventListener('click', getJokes);

 function getJokes(e){
    //  console.log('get some jokes');
    const number = document.querySelector('input[type="number"]').value;
    // console.log(number);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function(){
        if(this.status === 200){
            const jokes = JSON.parse(this.responseText);
            // console.log(jokes);
            let output ='';
            //loop over jokes array
            if(jokes.type === 'success'){
                jokes.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong</li>';
            }
            //insert into DOM
            document.querySelector('.jokes').innerHTML = output;
        } else {
            alert('Jokes not found!');
        }
    }
    xhr.send();
     e.preventDefault();
 }