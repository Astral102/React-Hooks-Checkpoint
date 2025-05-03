import React from 'react';

const Filter = ({ setSearchTitle, setMinRating }) => {
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <input 
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        min="0"
        max="5"
        onChange={(e) => setMinRating(Number(e.target.value))}
        style={{ marginLeft: 10 }}
      />
    </div>
  );
};

export default Filter;