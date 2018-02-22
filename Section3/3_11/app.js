// Event Delegation & Bubbling

//events bubble up to its parent elements
//events delegation is putting an event listener on a parent element and using logic to delegate or target child elements such as putting an eventlistener on a <ul> to target a specific <li>

// Bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// Delegation - only first .delete-item is selected with querySelector -- also used when elements are dynamically inserted into the DOM with JS
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  //find target for deletion
  // console.log(e.target);
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    //delete parent <li>
    e.target.parentElement.parentElement.remove();
  }
}