const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
let books = JSON.parse(localStorage.getItem('books')) || [];

function renderBooks(booksToRender = books) {
    bookList.innerHTML = '';
    booksToRender.forEach((book) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.category}</td>
            <td>${book.author}</td>
            <td>$${book.price.toFixed(2)}</td>
            <td>
                <button class="edit-btn" onclick="editBook('${book.id}')"><i class="fas fa-edit"></i> Edit</button>
                <button class="delete-btn" onclick="deleteBook('${book.id}')"><i class="fas fa-trash"></i> Delete</button>
            </td>
        `;
        bookList.appendChild(tr);
    });
}

function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

function addOrUpdateBook(event) {
    event.preventDefault();
    const id = document.getElementById('book-id').value;
    const name = document.getElementById('book-name').value;
    const category = document.getElementById('category').value;
    const author = document.getElementById('author').value;
    const price = parseFloat(document.getElementById('price').value);

    const existingBookIndex = books.findIndex(book => book.id === id);

    if (existingBookIndex !== -1) {
        // Update existing book
        books[existingBookIndex] = { id, name, category, author, price };
    } else {
        // Add new book
        books.push({ id, name, category, author, price });
    }

    saveToLocalStorage();
    renderBooks();
    bookForm.reset();
}

function editBook(id) {
    const book = books.find(book => book.id === id);
    if (book) {
        document.getElementById('book-id').value = book.id;
        document.getElementById('book-name').value = book.name;
        document.getElementById('category').value = book.category;
        document.getElementById('author').value = book.author;
        document.getElementById('price').value = book.price;
    }
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    saveToLocalStorage();
    renderBooks();
}

function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.id.toLowerCase().includes(searchTerm) ||
        book.name.toLowerCase().includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.price.toString().includes(searchTerm)
    );
    renderBooks(filteredBooks);
}

bookForm.addEventListener('submit', addOrUpdateBook);
searchButton.addEventListener('click', searchBooks);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchBooks();
    }
});

renderBooks();