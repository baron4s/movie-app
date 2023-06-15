import iconStar from '../assets/img/star.svg';

class ItemTopRatedMovie extends HTMLElement {
  set itemTopRatedMovie(item) {
    this._topRatedMovie = item;
    this.render();
  }
  render() {
    this.innerHTML = `
     <div class="container">
        <div class="wrapper">
          <div class="poster">
            <div class="icon-star">
              <img src="${iconStar}" />
              <span class="text-star">${this._topRatedMovie.vote_average}</span>
            </div>
            <div class="view-detail">
            <a href="">View detail</a>
            </div>
            <a href="www.google.com"><img src="https://image.tmdb.org/t/p/w500/${this._topRatedMovie.poster_path}" alt="image" class="img-poster" /></a>
            <div class="footer-item">
              <a href="" class="title-item">${this._topRatedMovie.original_title}</a>
              <div class="meta">
                <ul>
                  <li>${this._topRatedMovie.release_date}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

  `;
  }
}
customElements.define('item-topratedmovie', ItemTopRatedMovie);
