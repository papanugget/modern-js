console.log('User form validator connected');

//get field elements and addevent listeners for blur
const name = document.getElementById('name');
const zip = document.getElementById('zip');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.querySelector('submit');

//event listeners
name.addEventListener('blur', evalName);
zip.addEventListener('blur', evalZip);
email.addEventListener('blur', evalEmail);
phone.addEventListener('blur', evalPhone);

//functions
function evalName(){
    const regex = /^[A-Za-z]{2,10}$/;
    if(!regex.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function evalZip(e){
    const regex = /^[0-9]{5}(-[0-9]{4})?$/;
    if(!regex.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function evalEmail(e){
    const regex = /^([a-z0-9_\-\.]+)\@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i;
    if(!regex.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function evalPhone(e){
    const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if(!regex.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}

function clearAlert(){
    let alert = document.querySelector('.is-invalid');
    if(alert) {
        setTimeout(alert.classList.remove('is-invalid'), 3000);
    }
}