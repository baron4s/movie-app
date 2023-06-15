const API_Key = '';

class SourceData {
  static async searchFilm(keyword) {
    const respon = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${keyword}`);
    const responJson = await respon.json();
    if (responJson.results.length !== 0) {
      return Promise.resolve(responJson.results);
    } else {
      return Promise.reject(`${keyword} is not found`);
    }
  }
  static async nowPlayingMovies() {
    const respon = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_Key}&language=en-US&page=1`);
    const responJson = await respon.json();
    if (responJson.error) {
      return Promise.reject(`respon status ${responJson.error}`);
    } else {
      return Promise.resolve(responJson.results);
    }
  }
  static async popularMovies() {
    const respon = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`);
    const responJson = await respon.json();
    if (responJson.error) {
      return Promise.reject(`Respon status ${responJson.error}`);
    } else {
      return Promise.resolve(responJson.results);
    }
  }
  static async topRatedMovies() {
    const respon = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US&page=1`);
    const responJson = await respon.json();
    if (responJson.error) {
      return Promise.reject(`Respon status ${responJson.error}`);
    } else {
      return Promise.resolve(responJson.results);
    }
  }
  static async tvTopRated() {
    const respon = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_Key}&language=en-US&page=1`);
    const responJson = await respon.json();
    if (responJson.error) {
      return Promise.reject(responJson.error);
    } else {
      return Promise.resolve(responJson.results);
    }
  }
  static async tvPopular() {
    const respon = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_Key}&language=en-US&page=1`);
    const responJson = await respon.json();
    if (responJson.error) {
      return Promise.reject('error');
    } else {
      return Promise.resolve(responJson.results);
    }
  }
}

export default SourceData;
