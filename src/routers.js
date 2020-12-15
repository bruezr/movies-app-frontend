import React from 'react';
import Movies from './components/movies';
import AddMovie from './components/addMovie';
import RegisterUser from './components/registerUser';

const routes = {
  '/': () => <Movies />,
  '/addmovie': () => <AddMovie />,
  '/register': () => <RegisterUser />,
};

export default routes;
