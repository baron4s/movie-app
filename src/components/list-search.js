import './item-search';
class SearchConten extends HTMLElement {
  set searchItem(elementSearch) {
    this._searchItem = elementSearch;
    this.render();
  }
  renderError(message) {
    this.innerHTML = `
  <h2 class="placeholder-search">${message}</h2>
  `;
  }

  render() {
    this.innerHTML = '';
    this._searchItem.forEach((items) => {
      const itemSearch = document.createElement('item-search');
      itemSearch.itemSearch = items;
      this.appendChild(itemSearch);
    });
  }
}
customElements.define('list-search', SearchConten);
