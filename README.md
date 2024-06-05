## Task Instructions:

**Objective**
Create a simple "Book List Manager" application where users can add books they want to read, view the list of books, and remove books they've finished. The application will have a Python Flask backend and a JavaScript frontend.

1. Set Up the Project Directory Structure

1.1. Create a project directory named `book_list_manager`.
1.2. Inside the `book_list_manager` directory, create two subdirectories: `backend` and `frontend`.

The structure should look like this:

```
book_list_manager/
│
├── backend/
│
└── frontend/
```

2. Backend: Flask API

2.1. Set Up the Backend Environment

2.1. Open a terminal and navigate to the `backend` directory, create a Python virtual environment in the `backend` directory. Activate the virtual environment.

2. Install Flask in the virtual environment. Freeze the installed packages into a `requirements.txt` file.

2.1. Create the Flask App
2.2. In the `backend` directory, create a file named `app.py`.
2.3. Write Flask application in `app.py` that includes: - A route to get a list of books. - A route to add a book. - A route to delete a book by its ID.
2.4. Use an in-memory list to store the books for simplicity.

3. Frontend: HTML and JavaScript

3.1. Create the HTML File: In the `frontend` directory, create a file named `index.html`.

In `index.html`, add the basic structure for an HTML page: - A text input field for entering book titles. - A button to add the entered book. - An unordered list to display the books.

3.2. Create the JavaScript File - In the `frontend` directory, create a file named `script.js`.

In `script.js`, write JavaScript code to: - Fetch and display the list of books from the Flask backend when the page loads. - Add a new book to the backend when the button is clicked. - Delete a book from the backend when a delete button (associated with each book) is clicked.

3. Use the Fetch API to communicate with the Flask backend.

3.3. Link JavaScript to HTML - Link the `script.js` file to the `index.html` file.

4. Testing the Application- Open `index.html` in a web browser.
   Test the functionality: - Verify that the list of books is fetched and displayed on page load. - Add new books using the input field and button. - Delete books using the delete buttons.

5.  - Use console logs and browser developer tools to debug any issues.

-   Ensure the backend is running when testing the frontend.
-   Use meaningful IDs and classes in HTML for easier DOM manipulation in JavaScript.
