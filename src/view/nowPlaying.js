import SourceData from '../data/data-source.js';
import '../components/nav-bar';
import '../components/list-search';
import '../components/search';
import '../components/list-nowPlaying';

const nowPlaying = () => {
  const search = document.querySelector('nav-bar');
  const searchListElement = document.querySelector('list-search');
  const nowPlayingElement = document.querySelector('nowplaying-movies');

  const getItemFilmSearch = async () => {
    try {
      const result = await SourceData.searchFilm(search.value);
      nowPlayingElement.parentNode.style.display = 'none';
      renderResultSearch(result);
    } catch (message) {
      nowPlayingElement.parentNode.style.display = 'none';
      renderErrorSearch(message);
    }
  };

  const getItemNowPlaying = async () => {
    try {
      const result = await SourceData.nowPlayingMovies();
      renderResultNowPlaying(result);
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
  const renderResultNowPlaying = (result) => {
    nowPlayingElement.nowPlaying = result;
  };

  search.searchEvent = getItemFilmSearch;
  document.addEventListener('DOMContentLoaded', () => {
    getItemNowPlaying();
  });
};

export default nowPlaying;
