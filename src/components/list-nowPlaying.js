import './item-nowPlaying';

class NowPlaying extends HTMLElement {
  set nowPlaying(item) {
    this._nowPlaying = item;
    this.render();
  }
  render() {
    this.innerHTML = '';
    this._nowPlaying.forEach((item) => {
      const elementItem = document.createElement('item-nowplaying');
      elementItem.itemNowPlaying = item;
      this.appendChild(elementItem);
    });
  }
}
customElements.define('nowplaying-movies', NowPlaying);
