let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;  //returns nodeList
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecate)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


//get children element nodes
val = list.children; //returns HTMLCollection
val = list.children[0];
list.children[1].textContent = 'Hello';
//children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//first child
val = list.firstChild;  //gives text content of firstChild
val = list.firstElementChild; //give first element not just the textContent
//last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);