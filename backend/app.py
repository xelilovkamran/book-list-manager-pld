from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///book_manager.db'
app.config['CORS_HEADERS'] = 'Content-Type'
db = SQLAlchemy(app)


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(100), nullable=False)


@app.route('/add_book', methods=['POST'])
def add_book():
    data = request.get_json()

    new_book = Book(
        title=data['title'], author=data['author'])

    db.session.add(new_book)
    db.session.commit()

    return jsonify({'message': 'New book added!', "status": "success"}), 200


@app.route('/get_books', methods=['GET'])
def get_books():
    books = Book.query.all()
    books_list = []

    for book in books:
        books_list.append(
            {"id": book.id, 'title': book.title, 'author': book.author})

    return jsonify({'books': books_list}), 200


@app.route('/delete_book/<int:id>', methods=['DELETE'])
def delete_book(id):
    book = Book.query.get(id)

    if book is None:
        return jsonify({'message': 'Book not found!'}), 404

    db.session.delete(book)
    db.session.commit()

    return jsonify({'message': 'Book deleted!'}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
