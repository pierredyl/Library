import React from 'react';

function GetAllBooksComponent({ books }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books to display.</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.yearPublished}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default GetAllBooksComponent;