import SourceData from '../data/data-source.js';
import '../components/nav-bar';
import '../components/list-search';
import '../components/search';
import '../components/list-topRatedMovie';

const topRatedMovie = () => {
  const search = document.querySelector('nav-bar');
  const searchListElement = document.querySelector('list-search');
  const topRatedMovieElement = document.querySelector('list-topratedmovies');

  const getItemFilmSearch = async () => {
    try {
      const result = await SourceData.searchFilm(search.value);
      topRatedMovieElement.parentNode.style.display = 'none';
      renderResultSearch(result);
    } catch (message) {
      topRatedMovieElement.parentNode.style.display = 'none';
      renderErrorSearch(message);
    }
  };

  const getTopRatedMovies = async () => {
    try {
      const result = await SourceData.topRatedMovies();
      renderTopRatedMovies(result);
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
  const renderTopRatedMovies = (result) => {
    topRatedMovieElement.topRatedMovie = result;
  };

  search.searchEvent = getItemFilmSearch;
  document.addEventListener('DOMContentLoaded', () => {
    getTopRatedMovies();
  });
};

export default topRatedMovie;
