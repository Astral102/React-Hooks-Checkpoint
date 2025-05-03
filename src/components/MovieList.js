import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',   
      }}
    >
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;