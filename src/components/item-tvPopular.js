import iconStar from '../assets/img/star.svg';

class ItemTvPopular extends HTMLElement {
  set itemTvPopular(item) {
    this._itemTvPopular = item;
    this.render();
  }
  render() {
    this.innerHTML = `
     <div class="container">
        <div class="wrapper">
          <div class="poster">
            <div class="icon-star">
              <img src="${iconStar}" />
              <span class="text-star">${this._itemTvPopular.vote_average}</span>
            </div>
            <div class="view-detail">
            <a href="">View detail</a>
            </div>
            <a href=""><img src="https://image.tmdb.org/t/p/w500/${this._itemTvPopular.poster_path}" alt="image" class="img-poster" /></a>
            <div class="footer-item">
              <a href="" class="title-item">${this._itemTvPopular.name}</a>
              <div class="meta">
                <ul>
                  <li>${this._itemTvPopular.first_air_date}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

  `;
  }
}
customElements.define('item-tvpopular', ItemTvPopular);
