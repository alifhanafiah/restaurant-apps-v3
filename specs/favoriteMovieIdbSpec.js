import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import { itActsAsFavoriteMovieModel } from './contract/favoriteMovieContract';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteMovieIdb.getAllMovies()).forEach(async (movie) => {
      await FavoriteMovieIdb.deleteMovie(movie.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteMovieIdb);
});
