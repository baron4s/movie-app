import searchIcon from '../assets/img/search.svg';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set searchEvent(event) {
    this._searchEvent = event;
    this.render();
  }
  get value() {
    return this.querySelector('#textSearch').value;
  }
  render() {
    this.innerHTML = `
     <div class="wrapper">
      <box-icon name="menu" class="menu" size="sm" color="#ffff"></box-icon>
        <div class="name-logo">
          <a href="index.html">KaFilms</a>
        </div>
        <nav class="navigation">
          <div class="navigation-item">
          <box-icon name='left-arrow-alt' size="md" color="#ffff" class="left-menu"></box-icon>
            <div class="home">
              <a href="index.html">Home</a>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Movies</button>
              <div class="dropdown-content premier">
                <a href="popularMovies.html">Popular</a>
                <a href="nowPlaying.html">Now Playing</a>
                <a href="topRatedMovies.html">Top Rated</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Tv-Show</button>
              <div class="dropdown-content second">
                <a href="tvPopular.html">Populer</a>
                <a href="topTvRated.html">Top Rated</a>
              </div>
            </div>
          </div>
          <div class="search-wrapper">
            <form id="search" autocomplete="off">
              <input type="text" id="textSearch" placeholder="Search film" />
              <button id="submitSearch"><img src="${searchIcon}" /></button>
            </form>
          </div>
          <box-icon name='search' size="sm" color="#ff4c29" class="search"></box-icon>
          <box-icon name='x' size="md" color="#ffff" class="close-search"></box-icon>
        </nav>
      </div>
    `;

    $('#submitSearch').click(this._searchEvent);
    $('#search').submit(function (event) {
      $('.nowplaying-movies', '.popular-movies', '.tv-toprated').css('display', 'none');
      this._searchEvent;
      event.preventDefault();
    });
    $('.menu').click(function () {
      $('.navigation-item').toggleClass('isactive-menu');
    });
    $('.left-menu').click(function () {
      $('.navigation-item').removeClass('isactive-menu');
    });
    $('.search').click(function () {
      $('.search-wrapper').css('left', '10px');
      $('.close-search').css('transform', 'scaleX(1)');
      $(this).css({ transform: 'scaleX(0)', transition: ' all 0.3s ease' });
      if ($('.close-search')) {
        $('.close-search').click(function () {
          $(this).css({ transform: 'scaleX(0)', transition: ' all 0.2s ease' });
          $('.search').css({ transform: 'scaleX(1)', transition: ' all 0.3s ease' });
          $('.search-wrapper').css('left', '-100%');
        });
      }
    });
  }
}
customElements.define('nav-bar', NavBar);
