import SourceData from '../data/data-source.js';
import '../components/nav-bar';
import '../components/list-search';
import '../components/search';
import '../components/list-nowPlaying';
import '../components/list-popularmovies';
import '../components/list-tvrated';
import { async } from 'regenerator-runtime';

const main = () => {
  const search = document.querySelector('nav-bar');
  const searchListElement = document.querySelector('list-search');
  const nowPlayingElement = document.querySelector('nowplaying-movies');
  const tvRatedElement = document.querySelector('toprated-tv');

  const films = [nowPlayingElement, tvRatedElement];
  const hiddenElement = () => {
    films.filter((element) => {
      if (element !== null) {
        return (element.parentNode.style.display = 'none');
      }
    });
  };
  const getItemFilmSearch = async () => {
    try {
      const result = await SourceData.searchFilm(search.value);
      hiddenElement();
      renderResultSearch(result);
    } catch (message) {
      hiddenElement();
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

  const getTvRated = async () => {
    try {
      const result = await SourceData.tvTopRated();
      renderTvRated(result);
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

  const renderTvRated = (result) => {
    tvRatedElement.tvRated = result;
  };

  search.searchEvent = getItemFilmSearch;

  getItemNowPlaying();
  getTvRated();
};

export default main;
