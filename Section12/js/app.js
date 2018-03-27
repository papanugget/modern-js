console.log('Calorie app connected');

//Storage controller

//Item controller
const ItemCtrl = (function(){
    // console.log('item controller!');
    //item constructor
    const item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    //data structure / state
    const data = {
        items: [
            {id: 0, name: 'Steak dinner', calories: 1200},
            {id: 1, name: 'Oatmeal cookie', calories: 400},
            {id: 2, name: 'Plum', calories: 200},
        ],
        currentItem: null,
        totalCalories: 0
    }
    //public method
    return {
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
})();

//UI controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list'
    }
    // console.log('UI controller!');
    return {
        populateItemList: function(items){
            let html = '';
            let list = document.querySelector(UISelectors.itemList);
            items.forEach(function(item){
                html += `
                <li class="collection-item" id="item-${item.id}"><strong>${item.name}: </strong><egit>${item.calories} Calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a></li>
                `;
            }); 
            //insert list items
            list.innerHTML = html;
        }
    }
})();

//App controller
const App = (function(ItemCtrl, UICtrl){
    // console.log(ItemCtrl.logData());
    //public methods
    return {
        init: function(){
            // console.log('Initializing App');
            //fetch items from data structure
            const items = ItemCtrl.getItems();
            // console.log(items);
            //populate list with items
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl)

//initialize app
App.init();