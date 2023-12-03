import { rapid_host, rapid_key } from '../shared/constants/constants';
import axios from 'axios';
import { IData } from '../shared/types';

class MovieService {
  private url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
  private config = {
    headers: {
      'X-RapidAPI-Key': rapid_key,
      'X-RapidAPI-Host': rapid_host
    }
  };
  async getAllMovies() {
    return axios.get<IData>(this.url, this.config);
  }
}

export default new MovieService();
