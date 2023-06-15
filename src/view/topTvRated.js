import SourceData from '../data/data-source.js';
import '../components/nav-bar';
import '../components/list-search';
import '../components/search';
import '../components/list-tvrated';

const topRatedTv = () => {
  const search = document.querySelector('nav-bar');
  const searchListElement = document.querySelector('list-search');
  const topTvRated = document.querySelector('toprated-tv');

  const getItemFilmSearch = async () => {
    try {
      const result = await SourceData.searchFilm(search.value);
      topTvRated.parentNode.style.display = 'none';
      renderResultSearch(result);
    } catch (message) {
      topTvRated.parentNode.style.display = 'none';
      renderErrorSearch(message);
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
  const renderTvRated = (result) => {
    topTvRated.tvRated = result;
  };

  search.searchEvent = getItemFilmSearch;
  document.addEventListener('DOMContentLoaded', () => {
    getTvRated();
  });
};

export default topRatedTv;
