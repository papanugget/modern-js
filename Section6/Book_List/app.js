/*
-use browser local storage
-get values from field inputs
-add success message for book adding success
-add warning message for empty fields / field validation
-store books as Book object using a constructor
 */
//Book constructor
function Book(title, author, isbn){
    this.title = title;    
    this.author = author;
    this.isbn = isbn;
}
//UI constructor
function UI(){
}
//add book to list
UI.prototype.addBookToList = (book) => {
    // console.log(book);
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //insert HTML into tr element
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    //append tr to list element
    list.appendChild(row);
}

//delete book 
UI.prototype.deleteBook = (target) => {
    if(target.className === 'delete'){
        //target is a element and targets parent td and parent of that tr
        target.parentElement.parentElement.remove();
    }
}

// clear fields
UI.prototype.clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';    
}

// success message
// UI.prototype.successMsg = () => {
//     const msgField = document.getElementById('message');
//     const msg = document.createElement('p');
//     msg.classList.add('success');
//     msg.innerHTML = `Book successfully submitted!`;
//     msgField.appendChild(msg);
// }

//form valdation
// UI.prototype.validate = () => {
//     const msgField = document.getElementById('message');
//     const msg = document.createElement('p');
    
//     if(title.value === '' || author.value === '' || isbn.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = `Please enter some book info.`;
//         msgField.appendChild(msg);
//     }
// }
// error message
UI.prototype.showAlert = (message, className) => {
    //create div
    const div = document.createElement('div');
    //add class
    div.className = `alert ${className}`;
    // add text / textnode
    div.appendChild(document.createTextNode(message));
    // insert into DOM
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);

    // timeout after 3secs
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

//add local storage
function Store(){
}

Store.prototype.getBooks = () => {
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(books = localStorage.getItem('books'));
    }
}
Store.prototype.displayBooks = () => {
    const store = new Store();
    const books = store.getBooks();
    books.forEach((book) => {
        const ui = new UI;
        ui.addBookToList(book);
    });
}
Store.prototype.addBook = (book) => {
    const store = new Store();
    const books = store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}
Store.prototype.removeBook = (isbn) => {
    const store = new Store();
    const books = store.getBooks();
    books.forEach((book, index) => {
        if(book.isbn === isnb){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
}
// DOM load event listener
// const store = new Store();
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', (e) => {
    //get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    //instantiate a book
    const book = new Book(title, author, isbn);
    //instantiate UI and local store
    const ui = new UI(); 
    const store = new Store();
    //Validate form
    if(title === '' || author === '' || isbn === ''){
        // alert('Failed');
        // Error alert
        ui.showAlert('Please fill in all fields', 'error')
    } else {
        //Add book to list
        ui.addBookToList(book);  
        // add to local storage
        store.addBook(book);  
        // show success
        ui.showAlert('Book successfully added!', 'success');
        // clear fields after submission
        ui.clearFields();
    }  
    e.preventDefault();
    // console.log(title, author, isbn);
});

// event listener for delete
//get parent element for dynamically added books
document.getElementById('book-list').addEventListener('click', (e) => {
    // console.log(123);
    //instantiate UI
    const ui = new UI();
    //instantiate localstorage
    const store = new Store();
    //call ui delete book function passing event target
    ui.deleteBook(e.target);
    //remove from local store using ISBN
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //show message
    ui.showAlert('Book removed!', 'success');
    e.preventDefault();
});

// add local storage