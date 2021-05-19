//Book constructor
function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}

//UI constructor

function UI(){
    //Add book to list
    UI.prototype.addBookToList=function(book){
        //console.log(book);
        const list = document.getElementById('book-list');
        //Create tr element
        const row = document.createElement('tr');
        //Insert cols
        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
}

//Show alert
UI.prototype.showAlert=function(message, className){
    //Create a div
    const div = document.createElement('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //Insert before form
    container.insertBefore(div, form);

    //Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);


}

UI.prototype.deleteBook = function(target){
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}
//Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listeners for add
document.getElementById('book-form').addEventListener('submit', function(e){
    e.preventDefault();
    //console.log('test');

    //Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
          //console.log(title, author, isbn);
    
    //Instantiate book
    const book = new Book(title, author, isbn);
    //console.log(book);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){
        //alert('Please input all details...')
        //Error alert
        ui.showAlert('Please fill in all fields', 'error');
    }else{        
        //Add book to UI
        ui.addBookToList(book);

        //Success alert
        ui.showAlert('Book Added!', 'success');
        //Clear input fields
        ui.clearFields();
    }
});

//Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target);
    
    //Instantiate ui
    const ui = new UI();

    //Delete Book
    ui.deleteBook(e.target);

    //show alert
    ui.showAlert('Book Removed', 'success');
});