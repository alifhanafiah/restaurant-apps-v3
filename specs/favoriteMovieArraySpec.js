import { itActsAsFavoriteMovieModel } from './contract/favoriteMovieContract';

let favoriteMovies = [];

const FavoriteMovieArray = {
  getMovie(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return favoriteMovies.find((movie) => movie.id === id);
  },

  getAllMovies() {
    return favoriteMovies;
  },

  putMovie(movie) {
    // eslint-disable-next-line no-prototype-builtins
    if (!movie.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getMovie(movie.id)) {
      return;
    }

    favoriteMovies.push(movie);
  },

  deleteMovie(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteMovies = favoriteMovies.filter((movie) => movie.id !== id);
  },

  searchMovies(query) {
    return this.getAllMovies()
      .filter((movie) => {
        const loweredCaseMovieTitle = (movie.title || '-').toLowerCase();
        const jammedMovieTitle = loweredCaseMovieTitle.replace(/\s/g, '');
        const loweredCaseQuery = query.toLowerCase();
        const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
        return jammedMovieTitle.indexOf(jammedQuery) !== -1;
      });
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => favoriteMovies = []);

  itActsAsFavoriteMovieModel(FavoriteMovieArray);
});
