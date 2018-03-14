console.log('AJAX Sandbox app connected');

document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //create XHR object
    const xhr = new XMLHttpRequest();
    const output = document.getElementById('output');
    //OPEN method
    xhr.open('GET', './js/data.txt', true);
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            output.innerHTML = `<h1>${this.responseText}</h1>`;
        } 
    }
    xhr.send();  //SEND required for function to work
    //readyState values
    //0: request not initialized
    //1: server connection established
    //2: request received
    //3: processing request
    //4: request finished and response is ready

    //HTTP Status codes
    //200: 'OK'
    //403: 'Forbidden'
    //404: 'Not found'
}