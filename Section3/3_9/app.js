// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click 
// clearBtn.addEventListener('click', runEvent);
// DoubleClick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// MouseUp
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// clearBtn.addEventListener('mouseenter', runEvent);
// Mouseleav
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// MouseOut
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);



// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}