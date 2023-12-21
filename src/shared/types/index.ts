export interface IData {
  results: IMovie[];
}

export interface IMovieType {
  upcoming: string;
  popular: string;
  top_rated: string;
}

export interface ITvType {
  top_rated: string;
  popular: string;
  on_the_air: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  media_type?: 'movie' | 'tv';
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
