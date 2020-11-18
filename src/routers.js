import React from 'react';
import Movies from './components/movies';
import AddMovie from './components/addMovie';

const routes = {
  '/movies': () => <Movies />,
  '/addmovie': () => <AddMovie />,
};

export default routes;
