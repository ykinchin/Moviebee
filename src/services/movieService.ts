import { tmdb_key } from '../shared/constants/constants';
import axios from 'axios';
import { IData } from '../shared/types';

class MovieService {
  private url = 'https://api.themoviedb.org/3';
  private config = {
    headers: {
      Authorization: `Bearer ${tmdb_key}`
    }
  };
  async getData(endpoint: string) {
    return axios.get<IData>(`${this.url}${endpoint}`, this.config);
  }
}

export default new MovieService();
