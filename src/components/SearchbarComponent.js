import { useState } from 'react';

function SearchbarComponent({ searchQuery }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchQuery(query);
      setQuery('');
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchbarComponent;
