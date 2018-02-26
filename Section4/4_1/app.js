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
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear tasks event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
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

//Remove Task
function removeTask(e){
  //checks e.targets parent to see if the classlist contains the a href
  if(e.target.parentElement.classList.contains('delete-item')){
    // console.log(e.target);
    //removes e.target's parent parent which should be the li container element
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear Tasks
function clearTasks(){
  // taskList.innerHTML = '';
  //faster with while loop
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

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