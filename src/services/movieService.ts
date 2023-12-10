import axios from 'axios';
import { tmdb_key } from '../shared/constants/constants';

class MovieService {
  readonly url = 'https://api.themoviedb.org/3';
  private config = {
    headers: {
      Authorization: `Bearer ${tmdb_key}`
    }
  };
  async getData(endpoint: string) {
    return axios.get(`${this.url}${endpoint}`, this.config);
  }
}

export default new MovieService();
