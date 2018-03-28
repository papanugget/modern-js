console.log('Calorie app connected');

//Storage controller

//Item controller
const ItemCtrl = (function(){
    // console.log('item controller!');
    //item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    //data structure / state
    const data = {
        items: [
            // {id: 0, name: 'Steak dinner', calories: 1200},
            // {id: 1, name: 'Oatmeal cookie', calories: 400},
            // {id: 2, name: 'Plum', calories: 200},
        ],
        currentItem: null,
        totalCalories: 0
    }
    //public method
    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(item, calories){
            // console.log(item, calories)
            let ID;
            //create id 
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            //calories to number
            calories = parseInt(calories);

            //create new item
            newItem = new Item(ID, item, calories);
            //add to items array
            data.items.push(newItem);

            return newItem;
        },
        getItemById: function(id){
            let found = null;
            //loop thru items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found;
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
        },
        getTotalCals: function() {
            //loop thru items and add cals
            let total = 0;
            data.items.forEach(function(item){
                total += item.calories;
            });
            //set totalcals to looped value
            data.totalCalories = total;
            return data.totalCalories;
        },
        logData: function(){
            return data;
        }
    }
})();

//UI controller
const UICtrl = (function(){
    //private method
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        item: '#item-name',
        calories: '#item-calories',
        totalCals: '.total-calories'
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
        },
        //get item inputs
        getItemInput: function(){
            return {
                item: document.querySelector(UISelectors.item).value,
                calories: document.querySelector(UISelectors.calories).value
            }
        },
        addListItem: function(item){
            //show list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            //create li element
            const li = document.createElement('li');
            //add class
            li.className = 'collection-item';
            //add id
            li.id = `item-${item.id}`;
            //add HTML
            li.innerHTML = `<strong>${item.name}: </strong><em>${item.calories} Calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
            //insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        clearFields: function(){
            document.querySelector(UISelectors.item).value = '';
            document.querySelector(UISelectors.calories).value = '';
        },
        addItemToForm: function(){
            document.querySelector(UISelectors.item).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.calories).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        //show total calories
        showTotalCals: function(total){
            document.querySelector(UISelectors.totalCals).textContent = total;
        },
        clearEditState: function(){
            UICtrl.clearFields();
            //hide buttons
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function(){
            //show buttons
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        //public method
        getSelectors: function(){
            return UISelectors;
        }
    }
})();

//App controller
const App = (function(ItemCtrl, UICtrl){
    //load event listeners
    const loadEvents = function(){
        //get UI Selectors List
        const UISelectors = UICtrl.getSelectors();
        //add item event
        const addBtn = document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
        //edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);
    }
    //Add item submit function
    const itemAddSubmit = function(e){
        //get UI Selectors List
        // const UISelectors = UICtrl.getSelectors();
        //Get form input
        // const item = document.querySelector(UISelectors.item).value;
        // const calories = document.querySelector(UISelectors.calories).value;
        const input = UICtrl.getItemInput();
        // console.log(input);
        //check for data in fields
        if(input.item !== '' && input.calories !== ''){
            // console.log(123);
            //add item
            const newItem = ItemCtrl.addItem(input.item, input.calories);
            //add item to UI list
            UICtrl.addListItem(newItem);
            //get total calories
            const totalCals = ItemCtrl.getTotalCals();
            //add total cals to UI
            UICtrl.showTotalCals(totalCals);
            //clear fields
            UICtrl.clearFields();
        }
        e.preventDefault();
    }
    //update item submit
    const itemUpdateSubmit = function(e){
        // console.log('test');  //logs test when anywhere in UL is clicked
        if(e.target.classList.contains('edit-item')){
            //targets dynamically added edit icon
            // console.log('edit-item');
            //get list item id
            const listId = e.target.parentNode.parentNode.id;
            // console.log(listId);
            //break up listId into an array 
            const listIdArr = listId.split('-');
            // console.log(listIdArr);
            //get actual id #
            const id = parseInt(listIdArr[1]);
            //get item
            const itemToEdit = ItemCtrl.getItemById(id);
            // console.log(itemToEdit);
            //set current item
            ItemCtrl.setCurrentItem(itemToEdit);
            //add item to form
            UICtrl.addItemToForm();
        }
        e.preventDefault();
    }
    // console.log(ItemCtrl.logData());
    //public methods
    return {
        init: function(){
            //clear edit state / set inital state
            UICtrl.clearEditState();
            // console.log('Initializing App');
            //fetch items from data structure
            const items = ItemCtrl.getItems();
            //check if any items
            if(items.length === 0){
                UICtrl.hideList();
            } else {
                //populate list with items
                UICtrl.populateItemList(items);
            }
            const totalCals = ItemCtrl.getTotalCals();
            //add total cals to UI
            UICtrl.showTotalCals(totalCals);
            // console.log(items);
            //load event listeners
            loadEvents();
        }
    }
})(ItemCtrl, UICtrl)

//initialize app
App.init();