document.querySelector("#new-book").addEventListener("click", () => {
    document.querySelector("#new-book-info").showModal();
});

document.querySelector("#add-book").addEventListener("click", () => {
    let title  = document.querySelector("#new-book-title").value;
    let author = document.querySelector("#new-book-author").value;
    let pages  = document.querySelector("#new-book-pages").value;
    let read = document.querySelector("#new-book-read").checked;
    
    addBookToLibrary(title, author, pages, read);
    
    console.log(`Added book: ${myLibrary[myLibrary.length-1].info()}`);
    
    document.querySelector("#new-book-info").close();
    document.querySelector("#new-book-title").value = "";
    document.querySelector("#new-book-author").value = "";
    document.querySelector("#new-book-pages").value = 1;
    document.querySelector("#new-book-read").checked = false;
    displayBooks();
});

document.querySelector("#cancel-book").addEventListener("click", () => {
    document.querySelector("#new-book-info").close();
});

function toggleRead(event) {
    let state = event.target.checked;
    let id = Number(event.target.getAttribute("data-id"));
    
    myLibrary[id].read = state;
    
    console.log(`Changed book read status: ${myLibrary[id].info()}`);
    
    displayBooks();
}

function removeBook(event) {
    let id = Number(event.target.getAttribute("data-id"));
    
    console.log(`Deleting book: ${myLibrary[id].info()}`);
    
    myLibrary.splice(id, 1);
        
    displayBooks();
}

function displayBooks() {
    let library_root = document.querySelector("#library > tbody");
    library_root.innerHTML = "";
    for (let i = 0; i < myLibrary.length; ++i) {
        let book = document.createElement("tr");
        book.innerHTML = `
            <td>${myLibrary[i].title}</td>
            <td>${myLibrary[i].author}</td>
            <td>${myLibrary[i].pages}</td>
            <td class="book-read"><input type="checkbox" ${myLibrary[i].read ? "checked" : "" } data-id="${i}"/></td>
            <td class="book-remove"><button data-id="${i}" class="btn btn-danger">Remove</button></td>`;
        library_root.appendChild(book);
        
        book.querySelector(".book-read").addEventListener("change", toggleRead);
        book.querySelector(".book-remove").addEventListener("click", removeBook);
    }
}

function createTestBooks() {
    addBookToLibrary("The Library of Babel", "Jorge Luis Borges", 8, true);
    addBookToLibrary("The Book of Sand", "Jorge Luis Borges", 2, false);
    addBookToLibrary("A Study in Scarlet", "Arthur Conan Doyle", 61, true);
    displayBooks();
}

createTestBooks();