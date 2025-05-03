import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';


const initialMovies = [
  {
    title: "Inception",
    description: "A mind-bending thriller.",
    posterURL: "https://via.placeholder.com/150",
    rating: 4.8
  },
  {
    title: "Breaking Bad",
    description: "Walter White",
    posterURL: "https://via.placeholder.com/150",
    rating: 4.9
  }
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [searchTitle, setSearchTitle] = useState('');
  const [minRating, setMinRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= minRating
  );

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>🎬 My Movie App</h1>
      <Filter setSearchTitle={setSearchTitle} setMinRating={setMinRating} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;