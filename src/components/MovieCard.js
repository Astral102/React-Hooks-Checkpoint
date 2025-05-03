import React from 'react';
import Inception from './assets/inception.webp';
import BB from './assets/bb.webp';

const MovieCard = ({ movie }) => {
  const getImage = (title) => {
    switch (title) {
      case 'Inception':
        return Inception;
      case 'Breaking Bad':
        return BB;
      default:
        return movie.posterURL || 'https://via.placeholder.com/150';
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 10, margin: 10 }}>
      <h3>{movie.title}</h3>
      <img src={getImage(movie.title)} alt={movie.title} width="150" />
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;