import './list-search';

class SearchElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    const elementListSearch = document.createElement('list-search');
    this.appendChild(elementListSearch);
  }
}
customElements.define('search-element', SearchElement);
