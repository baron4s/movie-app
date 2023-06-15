import './item-popularmovie';

class PopularMovies extends HTMLElement {
  set popularMovies(item) {
    this._popularMovies = item;
    this.render();
  }
  render() {
    this._popularMovies.forEach((popularMovie) => {
      const elementItem = document.createElement('item-popularmovie');
      elementItem.itemPopularMovie = popularMovie;
      this.appendChild(elementItem);
    });
  }
}
customElements.define('popular-movies', PopularMovies);
