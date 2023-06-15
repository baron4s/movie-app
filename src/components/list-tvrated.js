import './item-tvrated';

class TvRated extends HTMLElement {
  set tvRated(item) {
    this._tvRated = item;
    this.render();
  }
  render() {
    this.innerHTML = '';
    this._tvRated.forEach((items) => {
      const itemTvRatedElement = document.createElement('item-tvrated');
      itemTvRatedElement.itemTvRated = items;
      this.appendChild(itemTvRatedElement);
    });
  }
}
customElements.define('toprated-tv', TvRated);
