import SourceData from '../data/data-source.js';
import '../components/nav-bar';
import '../components/list-search';
import '../components/search';
import '../components/list-tvPopular';

const tvPopular = () => {
  const search = document.querySelector('nav-bar');
  const searchListElement = document.querySelector('list-search');
  const tvPopularElement = document.querySelector('tv-popular');

  const getItemFilmSearch = async () => {
    try {
      const result = await SourceData.searchFilm(search.value);
      tvPopularElement.parentNode.style.display = 'none';
      renderResultSearch(result);
    } catch (message) {
      tvPopularElement.parentNode.style.display = 'none';
      renderErrorSearch(message);
    }
  };

  const tvPopular = async () => {
    try {
      const result = await SourceData.tvPopular();
      renderTvPopular(result);
    } catch (error) {
      console.log(error);
    }
  };

  const renderResultSearch = (result) => {
    searchListElement.searchItem = result;
  };
  const renderErrorSearch = (message) => {
    searchListElement.renderError(message);
  };
  const renderTvPopular = (result) => {
    tvPopularElement.tvPopular = result;
  };

  search.searchEvent = getItemFilmSearch;
  document.addEventListener('DOMContentLoaded', () => {
    tvPopular();
  });
};

export default tvPopular;
