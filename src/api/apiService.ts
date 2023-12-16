import axios from 'axios';
import { tmdb_key } from '../shared/constants/constants';

import { IData, IMovieType, ITvType } from '../shared/types';

export const movieType: IMovieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated'
};

export const tvType: ITvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air'
};

class ApiService {
  private baseUrl = 'https://api.themoviedb.org/3/';
  private config = {
    headers: {
      Authorization: `Bearer ${tmdb_key}`
    }
  };
  async getMovieList(type: keyof typeof movieType) {
    const url = this.baseUrl + 'movie/' + movieType[type];
    return axios.get<IData>(`${url}`, this.config);
  }
  async getTvList(type: keyof typeof tvType) {
    const url = this.baseUrl + 'tv/' + tvType[type];
    return axios.get<IData>(`${url}`, this.config);
  }
  async search(category: string) {
    return axios.get<IData>(`${this.baseUrl}${category}`, this.config);
  }
  async detail(endpoint: string) {
    return axios.get<IData>(`${this.baseUrl}${endpoint}`, this.config);
  }
  async similar(endpoint: string) {
    return axios.get<IData>(`${this.baseUrl}${endpoint}`, this.config);
  }
}

export default new ApiService();
