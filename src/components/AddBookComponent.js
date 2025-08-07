// AddBookComponent.js
import React from 'react';

function AddBookComponent({ formData, handleChange, handleAddBook }) {
  return (
    <div className="form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
      />
      <input
        type="number"
        name="yearPublished"
        placeholder="Year"
        value={formData.yearPublished}
        onChange={handleChange}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default AddBookComponent;
