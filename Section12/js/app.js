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
        updateListItem: function(name, calories){
            //turn calories to number
            calories = parseInt(calories);
            let found = null;
            //loop thru items
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function(id){
            //get ids
            ids = data.items.map(function(item){
                return item.id;
            });
            //get index
            const index = ids.indexOf(id);
            //remove item by splice
            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
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
            listItems: '#item-list li',
            addBtn: '.add-btn',
            updateBtn: '.update-btn',
            deleteBtn: '.delete-btn',
            backBtn: '.back-btn',
            clearBtn: '.clear-btn',
            name: '#item-name',
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
                name: document.querySelector(UISelectors.name).value,
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
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);
            //change nodeList to array
            listItems = Array.from(listItems);
            // console.log(listItems);
            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');
                console.log(itemID);
                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong><em>${item.calories} Calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
                }
            });
        },
        deleteListItem: function(id){
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        clearFields: function(){
            document.querySelector(UISelectors.name).value = '';
            document.querySelector(UISelectors.calories).value = '';
        },
        addItemToForm: function(){
            document.querySelector(UISelectors.name).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.calories).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);
            //turn node into array
            listItems = Array.from(listItems);
            listItems.forEach(function(item){
                item.remove();
            });
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
        //disable submit on enter when in edit state
        document.addEventListener('keypress', function(e){
            if(e.keycode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        });
        //edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
        //update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);  
        //delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);        
        //back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);  
        //clear all button event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
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
        if(input.name !== '' && input.calories !== ''){
            // console.log(123);
            //add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
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
    //Click edit item
    const itemEditClick = function(e){
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
    //update item submit
    const itemUpdateSubmit = function(e){
        // console.log('edit submitted');
        //get item input
        const input = UICtrl.getItemInput();
        //update item
        const updatedItem = ItemCtrl.updateListItem(input.name, input.calories);
        //update UI
        UICtrl.updateListItem(updatedItem);
        //get total calories
        const totalCals = ItemCtrl.getTotalCals();
        //add total cals to UI
        UICtrl.showTotalCals(totalCals);
        UICtrl.clearEditState();
        e.preventDefault();
    }
    //delete button event
    const itemDeleteSubmit = function(e){
        // console.log(123);
        //get id from current item
        const currentItem =  ItemCtrl.getCurrentItem();
        //delete from data structure
        ItemCtrl.deleteItem(currentItem.id);
        //update UI / delete from UI
        UICtrl.deleteListItem(currentItem.id);
        //get total calories
        const totalCals = ItemCtrl.getTotalCals();
        //add total cals to UI
        UICtrl.showTotalCals(totalCals);
        UICtrl.clearEditState();
        e.preventDefault();
    }
    //clear all items event
    const clearAllItemsClick = function(){
        console.log(123);
        //delete all items from data structure
        ItemCtrl.clearAllItems();
        //clear UI
        UICtrl.removeItems();
        //get total calories
        const totalCals = ItemCtrl.getTotalCals();
        //add total cals to UI
        UICtrl.showTotalCals(totalCals);
        //hide UL
        UICtrl.hideList();
    }
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