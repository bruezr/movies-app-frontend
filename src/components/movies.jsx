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
    <div>
      <div className="row row-cols-1 row-cols-md-4">
        {movies.map((movie) => (
          <div className="col mb-4" key={movie._id}>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {movie.release_date}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Stock {movie.stock}
                </h6>
                <p className="card-text">{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
