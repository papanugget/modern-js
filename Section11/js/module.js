console.log('Module connected');

//Basic structure
//IIFE 

// (function(){
//     //declare private vars and functions

//     return {
//         //declare public vars and functions
//     }
// })();

//Standard module pattern
// const UICtrl = (function(){
//     let text = 'Hello World';
//     const changeText = function(){
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }
//     return {
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();
// console.log(UICtrl.changeText);  //cannot access as it is a private function

//Revealing Module Pattern
const ItemCtrl = (function(){
    let _data = [];  // '_data' denotes private vars
    function _add(item){
        _data.push(item);
        console.log('Item added');
        console.log(_data);
    }
    function _get(id){
        return _data.find(item => {
            return item.id === id;
        });
    }
    return {
        add: _add,  //declares these private functions as revealed / available
        get: _get
    }
})();

ItemCtrl.add({id: 1, name: 'Jon'});
ItemCtrl.add({id: 2, name: 'Arya'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));


