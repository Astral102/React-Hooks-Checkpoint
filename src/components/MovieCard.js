import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', margin: '10px auto', width: '300px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3>{movie.title}</h3>
        <img src={movie.posterURL} alt={movie.title} width="100%" />
        <p>{movie.description}</p>
        <p>⭐ {movie.rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;