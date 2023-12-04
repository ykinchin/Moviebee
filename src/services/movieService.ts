import { tmdb_key } from '../shared/constants/constants';
import axios from 'axios';
import { IData } from '../shared/types';

class MovieService {
  private url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  private config = {
    headers: {
      Authorization: `Bearer ${tmdb_key}`
    }
  };
  async getAllMovies() {
    return axios.get<IData>(this.url, this.config);
  }
}

export default new MovieService();
