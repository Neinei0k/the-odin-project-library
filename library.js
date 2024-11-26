let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(
        new Book(title, author, pages, read)
    );
}

addBookToLibrary("The Library of Babel", "Jorge Luis Borges", 8, true);
addBookToLibrary("The Book of Sand", "Jorge Luis Borges", 10, false);
addBookToLibrary("A Study in Scarlet", "Arthur Conan Doyle", 100, true);