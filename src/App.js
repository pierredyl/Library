import React, { useState } from 'react';
import './App.css';
import AddBookComponent from './components/AddBookComponent';
import GetAllBooksComponent from './components/GetAllBooksComponent';
import SearchbarComponent from './components/SearchbarComponent';



function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    yearPublished: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddBook = async () => {
    const response = await fetch('http://localhost:8080/books/addBook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Book added!');
      setFormData({ title: '', author: '', yearPublished: '' });
    } else {
      alert('Failed to add book.');
    }
  };

  const handleGetAllBooks = async () => {
    const response = await fetch('http://localhost:8080/books/getAllBooks');
    const data = await response.json();
    setBooks(data);
  };

  const handleSearchBooks = async (query) => {
    const response = await fetch('http://localhost:8080/books/searchBooks?title=' + query);
    const data = await response.json();
    setBooks(data);
  }

  return (
    <div className="container">
      <h1>Library</h1>
      
      <AddBookComponent formData={formData} handleChange={handleChange} handleAddBook={handleAddBook} />

    <div style={{ display: 'flex', gap: '10rem', alignItems: 'center' }}>
      <SearchbarComponent searchQuery={handleSearchBooks}/>
      <button onClick={handleGetAllBooks}>Get All Books</button>
    </div>
      <GetAllBooksComponent books={books} />
    </div>
  );
}

export default App;
