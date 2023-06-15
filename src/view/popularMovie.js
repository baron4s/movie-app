import SourceData from '../data/data-source.js';
import '../components/nav-bar';
import '../components/list-search';
import '../components/search';
import '../components/list-popularmovies';

const popularMovies = () => {
  const search = document.querySelector('nav-bar');
  const searchListElement = document.querySelector('list-search');
  const popularMovieElement = document.querySelector('popular-movies');

  const getItemFilmSearch = async () => {
    try {
      const result = await SourceData.searchFilm(search.value);
      popularMovieElement.parentNode.style.display = 'none';
      renderResultSearch(result);
    } catch (message) {
      popularMovieElement.parentNode.style.display = 'none';
      renderErrorSearch(message);
    }
  };

  const getPopularMovies = async () => {
    try {
      const result = await SourceData.popularMovies();
      renderResultPopularMovies(result);
    } catch (error) {
      alert(error);
    }
  };
  const renderResultSearch = (result) => {
    searchListElement.searchItem = result;
  };
  const renderErrorSearch = (message) => {
    searchListElement.renderError(message);
  };
  const renderResultPopularMovies = (result) => {
    popularMovieElement.popularMovies = result;
  };

  search.searchEvent = getItemFilmSearch;
  document.addEventListener('DOMContentLoaded', () => {
    getPopularMovies();
  });
};

export default popularMovies;
