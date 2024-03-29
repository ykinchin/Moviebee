export interface IData {
  results: IMovie[];
}
export interface IDataReviews {
  results: IReview[];
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

export interface IMediaType {
  media_type?: 'movie' | 'tv';
}

export interface IMovie extends IMediaType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  first_air_date?: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface ICompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ICountries {
  iso_3166_1: string;
  name: string;
}

export interface IDetailedMovie extends IMovie {
  belongs_to_collection: null | string;
  budget: number;
  genres: IGenres[];
  homepage: string;
  imdb_id: string;
  production_companies: ICompanies[];
  production_countries: ICountries[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
}

export interface ICast {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface ICrew {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface ICredits {
  cast: ICast[];
  crew: ICrew[];
}

export interface IReview {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: null | number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface IPerson {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: null | string;
  gender: number;
  homepage: null | string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface IPersonMovie extends Partial<IMovie> {
  character: string;
  episode_count?: number;
}

interface IComment {
  movie: IMovie;
  comment: string;
  rating: number;
}

export interface IUser {
  userEmail?: string;
  phoneNumber?: string | null;
  photoURL?: string | null;
  uid?: string;
}

export interface IUserData {
  user: IUser;
  likedActors: IPerson[];
  likedMovies: IMovie[];
  likedSeries: IMovie[];
  comments: IComment[];
}
