import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailer, setTrailer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && posterURL && rating && trailer) {
      onAdd({ title, description, posterURL, rating: parseFloat(rating), trailer });
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
      setTrailer('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '20px auto' }}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} required />
      <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required min="0" max="5" step="0.1" />
      <input placeholder="Trailer URL (embed)" value={trailer} onChange={(e) => setTrailer(e.target.value)} required />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;