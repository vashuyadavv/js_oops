class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI {
    addBookToList(book){
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

    showAlert(message, className){
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

    deleteBook(target){
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    
    }
}

//Local Storage class
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books=[];
        }
        else{
                books=JSON.parse(localStorage.getItem('books'));
            }
            return books;
        }
    
    
    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI;

            //Add book to UI
            ui.addBookToList(book);
        });
    }
    
    static addBook(book){
        const books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);
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

        //Add book to LS
        Store.addBook(book);

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

    //Remove from local storage
    Store.removeBook(e.target.parentElement.parentElementSibling.textContent);
    //show alert
    ui.showAlert('Book Removed', 'success');
});