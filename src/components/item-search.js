import iconStar from '../assets/img/star.svg';

class ItemSearch extends HTMLElement {
  set itemSearch(item) {
    this._itemSearch = item;
    this.render();
  }
  render() {
    this.innerHTML = `
   <div class="container">
        <div class="wrapper">
          <div class="poster">
            <div class="icon-star">
              <img src="${iconStar}" />
              <span class="text-star">${this._itemSearch.vote_average}</span>
            </div>
            <div class="view-detail">
            <a href="">View detail</a>
            </div>
            <a href=""><img src="https://image.tmdb.org/t/p/w500/${this._itemSearch.poster_path}" alt="image" class="img-poster" /></a>
            <div class="footer-item">
              <a href="" class="title-item">${this._itemSearch.title}</a>
              <div class="meta">
                <ul>
                  <li>${this._itemSearch.release_date}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
    $('.poster').mouseenter(function () {
      $('.view-detail').toggleClass('isActive-viewdetail');
    });
  }
}
customElements.define('item-search', ItemSearch);
