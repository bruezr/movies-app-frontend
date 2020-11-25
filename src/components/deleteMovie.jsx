import React from 'react';

function DeleteMovie({ onDelete, movieId }) {
  return (
    <button onClick={() => onDelete(movieId)} className="btn btn-danger btn-sm">
      Delete
    </button>
  );
}

export default DeleteMovie;
