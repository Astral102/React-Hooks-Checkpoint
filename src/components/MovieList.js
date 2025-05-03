import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // stack vertically
        alignItems: 'center',    // center each card horizontally
      }}
    >
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;