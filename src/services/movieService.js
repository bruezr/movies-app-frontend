const uuid = require('uuid');

exports.moviesList = [
  {
    _id: '4c4b7e2c-92a0-4179-adfa-f16efb9867c1',
    title: 'Matrix',
    description:
      'Matrix es una trilogía de películas de ciencia ficción escritas y dirigidas por las hermanas Wachowski. Se compone de The Matrix, The Matrix Reloaded y The Matrix Revolutions y están protagonizadas en sus papeles principales por Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss y Hugo Weaving.​',
    release_date: 1999,
    stock: 22,
  },
  {
    _id: 'c037f081-aa2a-40bf-ae56-cfd1e8012335',
    title: 'The Shawshank Redemption',
    description:
      'Un hombre inocente es enviado a una corrupta penitenciaria de Maine en 1947 y sentenciado a dos cadenas perpetuas por un doble asesinato.​',
    release_date: 1995,
    stock: 39,
  },
  {
    _id: '9adc9fbb-c008-4b49-bfb9-ce8ab9ccebfc',
    title: 'Vainilla Sky',
    description:
      'David Aames tiene todo para ser feliz: es guapo, rico y trabaja en una famosa empresa de publicidad de Nueva York. Sin embargo, un accidente automovilístico le cambiará la vida.',
    release_date: 2001,
    stock: 26,
  },
  {
    _id: '0863d6bf-c60c-47f9-9756-a9bbfbe2aff0',
    title: 'El Laberinto del Fauno',
    description:
      'En la España de 1944, la joven Ofelia y su madre enferma llegan al lugar en el que se encuentra el nuevo esposo de su madre, un sádico oficial del Ejército que intenta aplastar el levantamiento de una guerrilla. Mientras explora un antiguo laberinto, Ofelia conoce al fauno Pan, quien le dice que ella es una legendaria princesa perdida y debe completar tres peligrosas tareas para obtener la inmortalidad.',
    release_date: 2007,
    stock: 51,
  },
];

exports.insertMovie = (movie) => {
  movie._id = uuid.v4();
  this.moviesList.push(movie);
};
