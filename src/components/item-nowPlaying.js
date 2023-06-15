import iconStar from '../assets/img/star.svg';

class ItemNowPlaying extends HTMLElement {
  set itemNowPlaying(item) {
    this._itemNowPlaying = item;
    this.render();
  }
  render() {
    this.innerHTML = `
     <div class="container">
        <div class="wrapper">
          <div class="poster">
            <div class="icon-star">
              <img src="${iconStar}" />
              <span class="text-star">${this._itemNowPlaying.vote_average}</span>
            </div>
            <div class="view-detail">
            <a href="">View detail</a>
            </div>
            <a href=""><img src="https://image.tmdb.org/t/p/w500/${this._itemNowPlaying.poster_path}" alt="image" class="img-poster" /></a>
            <div class="footer-item">
              <a href="" class="title-item">${this._itemNowPlaying.title}</a>
              <div class="meta">
                <ul>
                  <li>${this._itemNowPlaying.release_date}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

  `;
  }
}
customElements.define('item-nowplaying', ItemNowPlaying);
