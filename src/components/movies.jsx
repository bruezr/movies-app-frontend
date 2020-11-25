import React, { useState, useEffect } from 'react';
import { moviesList } from '../services/movieService';
import { filterMovie } from '../services/movieService';
import DeleteMovie from './deleteMovie';

function Movies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    setMovies(moviesList);
  };

  const handleDelete = (movieId) => {
    filterMovie(movieId);
    getMovies();
  };

  if (movies.length === 0) {
    return (
      <div className="container">
        <h1>There are no movies in the database</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <p>Showing {movies.length} movies in the database.</p>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Release Date</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>
                {movie.description.length < 100
                  ? movie.description
                  : movie.description.substring(0, 100) + '...'}
              </td>
              <td>{movie.release_date}</td>
              <td>{movie.stock}</td>
              <td>
                <DeleteMovie movieId={movie._id} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
