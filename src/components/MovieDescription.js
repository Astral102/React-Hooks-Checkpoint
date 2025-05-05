import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(m => m.title === decodeURIComponent(title));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/"><button style={{ marginTop: '20px' }}>Back to Home</button></Link>
    </div>
  );
};

export default MovieDescription;