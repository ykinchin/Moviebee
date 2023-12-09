import axios from 'axios';
import { kinopoisk_key } from '../shared/constants/constants';

class MovieService {
  private url = 'https://api.kinopoisk.dev/v1.4';
  private config = {
    headers: {
      'X-API-KEY': 'STK225D-NXKMVJ0-GX8SQF8-TAMXASQ'
    }
  };
  async getData(endpoint: string) {
    return axios.get(`${this.url}${endpoint}`, this.config);
  }
}

export default new MovieService();
