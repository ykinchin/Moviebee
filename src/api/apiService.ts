import axios from 'axios';
import { tmdb_key } from '../shared/constants/constants';

import {
  ICredits,
  IData,
  IDetailedMovie,
  IMovieType,
  ITvType
} from '../shared/types';

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

  public config = {
    headers: {
      Authorization: `Bearer ${tmdb_key}`
    }
  };
  async getMovieList(type: keyof typeof movieType) {
    const url = this.baseUrl + 'movie/' + movieType[type];
    return axios.get<IData>(url, this.config);
  }
  async getTvList(type: keyof typeof tvType) {
    const url = this.baseUrl + 'tv/' + tvType[type];
    return axios.get<IData>(url, this.config);
  }
  async search(query: string) {
    const url = this.baseUrl + 'search/multi';
    const configWithQuery = {
      ...this.config,
      params: {
        query: query
      }
    };
    return axios.get<IData>(`${url}`, configWithQuery);
  }
  async detail(category?: 'tv' | 'movie', id?: string) {
    const url = this.baseUrl + category + '/' + id;
    return axios.get<IDetailedMovie>(url, this.config);
  }
  async credits(category?: 'tv' | 'movie', id?: string) {
    const url = this.baseUrl + category + '/' + id + '/credits';
    return axios.get<ICredits>(url, this.config);
  }
  async similar(category?: 'tv' | 'movie', id?: string) {
    const url = this.baseUrl + category + '/' + id + '/similar';
    return axios.get<IData>(url, this.config);
  }
}

export default new ApiService();
