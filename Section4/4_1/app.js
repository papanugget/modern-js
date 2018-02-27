// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//function to load all event listeners
loadEventListeners();

//functions
function loadEventListeners(){
  //DOM load event to show previously entered tasks
  document.addEventListener('DOMContentLoaded', getTasks);
  // add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}
// Get Tasks from localstore
function getTasks(){
  let tasks; //local scope
  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  //loop thru existing tasks and create DOM elements
  tasks.forEach(function(task){
    //create li element for tasklist
    const li = document.createElement('li');
    //add a class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(task));
    //create new link element
    const link = document.createElement('a');
    //add a class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fas fa-times"></i>';
    //append link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
  });
}
// add task
function addTask(e){
  if(taskInput.value === ''){
    alert('Please enter a task');
  }
  //create li element for tasklist
  const li = document.createElement('li');
  //add a class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement('a');
  //add a class
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class="fas fa-times"></i>';
  //append link to li
  li.appendChild(link);
  //append li to ul
  taskList.appendChild(li);
  //store in localStorage
  storeTaskInLocalStorage(taskInput.value);
  //clear input
  taskInput.value = '';
  e.preventDefault();
}

//localstorage function add local storage for data persistence
function storeTaskInLocalStorage(task){
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
}

//Remove Task
function removeTask(e){
  //checks e.targets parent to see if the classlist contains the a href
  if(e.target.parentElement.classList.contains('delete-item')){
    // console.log(e.target);
    //removes e.target's parent parent which should be the li container element
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
      //remove from localstore
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
//remove from localstore
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  //loop through array 
  tasks.forEach(function(task, index){
    //checks if the DOM element text matches the array content
    if(taskItem.textContent === task){
      //splices using the index of the iteration
      tasks.splice(index, 1);
    }
  });
  //resets localstore tasks with updated content 
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // console.log(taskItem);
}
//Clear Tasks
function clearTasks(){
  // taskList.innerHTML = '';
  //faster with while loop
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  //clear from localstore
  clearTasksFromLocalStorage();
}
//clear tasks from localstore
function clearTasksFromLocalStorage(){
  localStorage.clear();
}
//Filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  //take all list items and runs forEach
  document.querySelectorAll('.collection-item').forEach(function(task){
    //gets text content 
    const item = task.firstChild.textContent;
    //pass text being typed into indexOf item nodeList if no match = -1 
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
  // console.log(text);
}
