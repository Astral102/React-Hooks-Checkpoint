import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDescription from './components/MovieDescription';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
      rating: 4.8,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Breaking Bad",
      description: "A chemistry teacher turns to a life of crime.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmR1UfShiKt6vY3J9tjztfpJvB7qM3xIQ_-TUF25_zZYzoTfz",
      rating: 4.9,
      trailer: "https://www.youtube.com/embed/HhesaQXLuRY"
    }
  ]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <AddMovie onAdd={handleAddMovie} />
            <MovieList movies={movies} />
          </>
        } />
        <Route path="/movies/:title" element={<MovieDescription movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;