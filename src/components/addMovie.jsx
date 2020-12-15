import React, { useState } from 'react';
import axios from 'axios';

const dbUrl = process.env.REACT_APP_MOVIES_DATABASE;

function AddMovie(props) {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    release_date: false,
    stock: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

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

  const validate = () => {
    if (
      movie.title.trim().length >= 1 &&
      movie.description.trim().length >= 1 &&
      movie.release_date &&
      movie.stock
    ) {
      setValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    validate();
  };

  const saveMovieToDb = () => {
    axios.post(dbUrl + 'movies', movie).catch((e) => console.log(e));
  };

  if (submitted && valid) {
    saveMovieToDb();
    return (
      <div className="container">
        <h1>Movie added successfully</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1>Add Movie</h1>
          <label>Title</label>
          <input
            type="text"
            className={
              submitted && movie.title.trim().length < 1
                ? 'form-control is-invalid'
                : 'form-control '
            }
            onChange={handleTitleChange}
            placeholder="Enter movie name"
          />
          <div className="invalid-feedback">Please provide a title</div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className={
              submitted && movie.description.trim().length < 1
                ? 'form-control is-invalid'
                : 'form-control '
            }
            onChange={handleDescriptionChange}
            placeholder="Enter movie description"
          />
          <div className="invalid-feedback">Please provide a description</div>
        </div>
        <div className="form-group">
          <label>Release Date</label>
          <input
            type="number"
            className={
              submitted && !movie.release_date
                ? 'form-control is-invalid'
                : 'form-control '
            }
            onChange={handleReleaseDate}
            placeholder="Enter release date"
          />
          <div className="invalid-feedback">Please provide a release date</div>
        </div>{' '}
        <div className="form-group">
          <label>Stock</label>
          <input
            type="number"
            className={
              submitted && !movie.stock
                ? 'form-control is-invalid'
                : 'form-control '
            }
            onChange={handleStock}
            placeholder="Enter movie stock"
          />
          <div className="invalid-feedback">Please provide stock</div>
        </div>
        <button type="submit" className={'btn btn-primary'}>
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
