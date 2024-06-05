const bookNameField = document.querySelector("#bookName");
const authorNameField = document.querySelector("#authorName");
const addBookBtn = document.querySelector(".addBookBtn");
const bookList = document.querySelector(".bookList");

const addBook = async (bookName, authorName) => {
    try {
        const res = await fetch("http://127.0.0.1:5000/add_book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: bookName, author: authorName }),
        });

        if (!res.ok) throw new Error("Error in adding book");
        if (res.status !== 200)
            throw new Error("Please enter book name and author name");

        const data = await res.json();
        return data;
    } catch (err) {
        alert(err);
    }
};

const getBooks = async () => {
    try {
        const res = await fetch("http://127.0.0.1:5000/get_books");

        if (!res.ok) throw new Error("Error in fetching books");

        const data = await res.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
};

const deleteBook = async (bookId) => {
    console.log(bookId);
    await fetch(`http://127.0.0.1:5000/delete_book/${bookId}`, {
        method: "DELETE",
    });
};

const updateList = async () => {
    const books = await getBooks();
    bookList.innerHTML = "";
    books.books.forEach((book) => {
        const div = document.createElement("div");
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.classList.add("deleteBtn");
        button.id = book.id;
        li.textContent = `${book.title} - ${book.author}`;
        div.appendChild(li);
        div.appendChild(button);
        bookList.appendChild(div);

        button.addEventListener("click", async (event) => {
            await deleteBook(event.target.id);
            await updateList();
        });
    });
};

addBookBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const bookName = bookNameField.value;
    const authorName = authorNameField.value;
    const response = await addBook(bookName, authorName);

    if (response.status === "success") {
        await updateList();
        bookNameField.value = "";
        authorNameField.value = "";
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    await updateList();
});
