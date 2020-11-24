import React, { useState } from 'react';
import axios from 'axios';

const dbUrl = process.env.REACT_APP_MOVIES_DATABASE;

function AddMovie(props) {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    release_date: '',
    stock: '',
  });
  const [submitOk, setSubmitOk] = useState(false);

  const handleTitleChange = (event) => {
    setMovie({ ...movie, title: event.target.value });
  };
  const handleDescriptionChange = (event) => {
    setMovie({ ...movie, description: event.target.value });
  };

  const handleReleaseDate = (event) => {
    setMovie({ ...movie, release_date: parseInt(event.target.value) });
  };

  const handleStock = (event) => {
    setMovie({ ...movie, stock: parseInt(event.target.value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMovie(movie);
    axios
      .post(dbUrl + 'movie', movie)
      .then(setSubmitOk(true))
      .catch((e) => console.log(e));
  };

  if (submitOk)
    return (
      <div className="container">
        <h1>Movie added successfully</h1>
      </div>
    );

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1>Add Movie</h1>
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            onChange={handleTitleChange}
            placeholder="Enter movie name"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            onChange={handleDescriptionChange}
            placeholder="Enter movie description"
          />
        </div>
        <div className="form-group">
          <label>Release Date</label>
          <input
            type="number"
            className="form-control "
            onChange={handleReleaseDate}
            placeholder="Enter release date"
          />
        </div>{' '}
        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            className="form-control"
            onChange={handleStock}
            placeholder="Enter movie stock"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
