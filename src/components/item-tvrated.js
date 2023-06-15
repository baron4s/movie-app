import iconStar from '../assets/img/star.svg';

class ItemTvRated extends HTMLElement {
  set itemTvRated(item) {
    this._itemTvRated = item;
    this.render();
  }
  render() {
    this.innerHTML = `
     <div class="container">
        <div class="wrapper">
          <div class="poster">
            <div class="icon-star">
              <img src="${iconStar}" />
              <span class="text-star">${this._itemTvRated.vote_average}</span>
            </div>
            <div class="view-detail">
            <a href="">View detail</a>
            </div>
            <a href=""><img src="https://image.tmdb.org/t/p/w500/${this._itemTvRated.poster_path}" alt="image" class="img-poster" /></a>
            <div class="footer-item">
              <a href="" class="title-item">${this._itemTvRated.name}</a>
              <div class="meta">
                <ul>
                  <li>${this._itemTvRated.first_air_date}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

  `;
  }
}
customElements.define('item-tvrated', ItemTvRated);
