import axios from 'axios';
import { tmdb_key } from '../shared/constants/constants';

import { IData } from '../shared/types';

export const category = {
  movie: 'movie',
  tv: 'tv'
};

interface tt {
  upcoming: string;
  popular: string;
  top_rated: string;
}

export const movieType: tt = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated'
};

export const tvType = {
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
  async getMovieList(type: string) {
    const url = this.baseUrl + 'movie/' + movieType.top_rated;
    return axios.get<IData>(`${url}${type}`, this.config);
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
