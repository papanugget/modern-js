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
  // add task event
  form.addEventListener('submit', addTask);
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
  //clear input
  taskInput.value = '';
  e.preventDefault();
}