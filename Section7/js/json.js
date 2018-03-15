console.log('Working with JSON connected');

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

//load customer
function loadCustomer(e){
    const xhr = new XMLHttpRequest();
    //get request, file to get, true for asynchronous
    xhr.open('GET', './js/customer.json', true);
    xhr.onload = function(){
        // check if status is ok
        if(this.status === 200){
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>   
                    <li>Comments: ${customer._comment}</li>                                     
                </ul>
            `
            document.getElementById('customer').innerHTML = output;
        } else{
            alert('file not found');
        }
    }
    xhr.send();
}
//load customers
function loadCustomers(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './js/customers.json', true);
    xhr.onload = function(){
        //check status ok and check if local copy exists
        if((this.status === 200) && (localStorage.getItem('customers') === null)){
            const customers = JSON.parse(this.responseText);
            const ui = new UI();
            let output = "";
        //     customers.forEach((customer) => {
        //         output += `
        //             <ul>
        //                 <li>ID: ${customer.id}</li>
        //                 <li>Name: ${customer.name}</li>
        //                 <li>Company: ${customer.company}</li>
        //                 <li>Phone ${customer.phone}</li>
        //             </ul>
        //         `
        //     });
        //     document.getElementById('customers').innerHTML = output;          
        // } else {            
        //     ui.showAlert('Customers file not found', 'danger');
        // }
            for(let i = 0; i < customers.length; i++){
                output += `
                    <ul>
                        <li>ID: ${customers[i].id}</li>
                        <li>Name: ${customers[i].name}</li>
                        <li>Company: ${customers[i].company}</li>
                        <li>Phone: ${customers[i].phone}</li>
                        <li>Comments: ${customers[i].comment} </li>
                    </ul>
                `
                document.getElementById('customers').innerHTML = output;
            }
            if(localStorage.getItem('customers') === null){
                //local store customers if doesn't exist
                localStorage.setItem('customers', JSON.stringify(customers));
            }
        } else {
            const ui = new UI();
            const customers = JSON.parse(localStorage.getItem('customers'));
            let output = "";
            ui.showAlert('Local copy found, using local copy', 'danger');
            for(let i = 0; i < customers.length; i++){
                output += `
                    <ul>
                        <li>ID: ${customers[i].id}</li>
                        <li>Name: ${customers[i].name}</li>
                        <li>Company: ${customers[i].company}</li>
                        <li>Phone: ${customers[i].phone}</li>
                        <li>Comments: ${customers[i].comment} </li>
                    </ul>
                `
                document.getElementById('customers').innerHTML = output;
            }
        }
    }
    xhr.send();
}

//customer constructor
function Customer(id, name, company, phone, comment){
    this.id = id;
    this.name = name;
    this.company = company;
    this.phone = phone;
    this.comment = comment;
}

function UI(){
}

UI.prototype.showAlert = (message, className) => {
    const alertDiv = document.querySelector('.alert');
    // console.log(alertDiv);
    alertDiv.classList.add(`${className}`);
    alertDiv.textContent = `${message}`;
    setTimeout( () => {
        alertDiv.classList.remove(`${className}`);
        alertDiv.textContent = "";
    }, 3000);
}

UI.prototype.clearFields = () => {
    document.getElementById('nameInput').value = "";
    document.getElementById('companyInput').value = "";
    document.getElementById('phoneInput').value = "";   
    document.getElementById('commentInput').value = "";     
}

document.getElementById('submit').addEventListener('click', formSubmit);

function formSubmit(e){
    const   name = document.getElementById('nameInput').value,
            company = document.getElementById('companyInput').value,
            phone = document.getElementById('phoneInput').value,
            comment = document.getElementById('commentInput').value;
    const customers = JSON.parse(localStorage.getItem('customers'));
    const ui = new UI();
    //validate fields for data
    if(name === '' || company === ''  || phone === '' || comment === ''){
        ui.showAlert('Please fill in the form', 'danger');
    } else {
        let id;
        const customer = new Customer(id, name, company, phone, comment);   
        customers.push(customer);     
        //loop thru customers array and create an id if none exist
        for(let i = 0; i < customers.length; i++){
            //checks existence of id
            if(customers.id === undefined || !customers.id){
                customer.id = Number([i]) + 1; 
            }
           console.log(customers);
        }
        localStorage.setItem('customers', JSON.stringify(customers));
        ui.showAlert('Thanks for adding yourself!', 'success');
        ui.clearFields();
    }
    e.preventDefault();
}

//store customers.json in local storage
// function storeCustomers(person){
//     let id;
//     let customers;
//     const   name = document.getElementById('nameInput').value,
//             company = document.getElementById('companyInput').value,
//             phone = document.getElementById('phoneInput').value,
//             comment = document.getElementById('commentInput').value;
//     const customer = new Customer(id, name, company, phone, comment);
//     if(localStorage.getItem('customers') === null){
//         customers = [];
//     } else {
//         customers = JSON.parse(localStorage.getItem('customers'));
//         console.log(customers);
//         for(let i = 0; i < customers.length; i++){
//             return id += [i];
//         }
//     }
//     customers.push(customer);
//     localStorage.setItem('customers', JSON.stringify(customers));
// }

//take values from from and push into object
//take object and push into customers array JSON file
