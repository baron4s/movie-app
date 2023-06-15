import './item-topRatedMovie';

class TopRatedMovies extends HTMLElement {
  set topRatedMovie(movies) {
    this._topRatedMovie = movies;
    this.render();
  }
  render() {
    this.innerHTML = '';
    this._topRatedMovie.forEach((movie) => {
      const itemTopRatedMovie = document.createElement('item-topratedmovie');
      itemTopRatedMovie.itemTopRatedMovie = movie;
      this.appendChild(itemTopRatedMovie);
    });
  }
}
customElements.define('list-topratedmovies', TopRatedMovies);
