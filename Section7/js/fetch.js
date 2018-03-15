console.log('Fetch API connected!');

//recreate easyHTTP library with Fetch
//UI vars
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

function getText(e){
    fetch('./js/test.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data) {
        //console.log(data);
        document.getElementById('output').innerHTML= `<h3>${data}</h3>`;
    })
    .catch(function(error){
        console.log(error);
    });
    e.preventDefault();
}

function getJSON(e){
    fetch('./js/customers.json')
    .then(function(response){
        // console.log(response);
        return response.json();
    })
    .then(function(data){
        let output = '';
        // console.log(data);
        data.forEach(function(customer){
            output += `
                <ul>
                    <li>Name: ${customer.name}</li>
                    <li>ID: ${customer.id}</li>
                    <li>Company: ${customer.company}</li>                   
                    <li>Phone: ${customer.phone}</li>
                    <li>Comment: ${customer.comment}</li>                    
                </ul>
                `;
                document.getElementById('output').innerHTML = output;
        })
    })
    .catch(function(error){
        console.log(error);
    });
    e.preventDefault();
}

function getAPI(e){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(function(response){
        // console.log(response);
        return response.json();
    })
    .then(function(data){
        let output = '';
        // console.log(data);
            output += ` 
                <ul>
                    <li><img src="${data.icon_url}"> ${data.value}</li>
                </ul>
            `;
            document.getElementById('output').innerHTML = output;
    })
    .catch(function(error){
        console.log(error);
    });
    e.preventDefault();
}