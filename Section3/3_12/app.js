// Local & Session Storage

//set local storage item
// localStorage.setItem('name', 'Arya');
// localStorage.setItem('age', '12');

//session storage item
// sessionStorage.setItem('name', 'Sansa');

//remove from storage
// localStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

//clear local storage 
// localStorage.clear();

// console.log(name, age);
// alert(name + ' ' +  age);

//gets form and adds listener for submit event
document.querySelector('form').addEventListener('submit', function(e){
    //gets task input field value
    const task = document.getElementById('task').value;
    //sets an empty var
    let tasks;
    //check local storage and pull data if it exists
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        //gets tasks array if data exists but as a string so need to parse
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //pushes new task to end of tasks array after checking 
    tasks.push(task);
    //reset localStorage array with new value task
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');
    //prevents refresh of page
    e.preventDefault();
});

//gets tasks array from localStorage and stringifys it
const tasks = JSON.parse(localStorage.getItem('tasks'));

//loops through each task in the array and logs it
tasks.forEach(function(task){
    console.log(task);
});
