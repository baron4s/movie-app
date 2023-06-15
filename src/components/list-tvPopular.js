import './item-tvPopular';

class TvPopular extends HTMLElement {
  set tvPopular(item) {
    this._tvPopular = item;
    this.render();
  }
  render() {
    this.innerHTML = '';
    this._tvPopular.forEach((item) => {
      const itemTvPopular = document.createElement('item-tvpopular');
      itemTvPopular.itemTvPopular = item;
      this.appendChild(itemTvPopular);
      console.log(item);
    });
  }
}
customElements.define('tv-popular', TvPopular);
