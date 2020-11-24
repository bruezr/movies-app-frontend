import React, { useState, useEffect } from 'react';
import axios from 'axios';

const dbUrl = process.env.REACT_APP_MOVIES_DATABASE;

function Movies(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const result = await axios(dbUrl + 'movies');
      setMovies(result.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>
                {movie.description.length < 80
                  ? movie.description
                  : movie.description.substring(0, 80) + '...'}
              </td>
              <td>{movie.release_date}</td>
              <td>{movie.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
