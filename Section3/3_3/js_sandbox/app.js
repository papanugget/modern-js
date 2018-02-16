//DOM Selectors

//Single element selectors
// document.getElementById();
// document.getElementsByName();
console.log(document.getElementById('task-title'));

//Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//Change content
document.getElementById('task-title').textContent = 'textContent';
document.getElementById('task-title').innerText = 'innerText';
document.getElementById('task-title').innerHTML = '<span style="color: red">innerHTML</span>';

//cache task-title to a variable to prevent having to reselect each call
const taskTitle = document.getElementById('task-title');
taskTitle.innerText = 'taskTitle innerText';

//document.querySelector(); if more than 1 element gets first element in list
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); 

document.querySelector('li').style.background = 'purple';
document.querySelector('li').style.color = '#fff';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'pink';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#d3d3d3'; //still single element only selected and changed

