export interface IData {
  page: number;
  results: IMovie[];
}

export interface IMovie {
  id: string;
  originalTitleText: { text: string };
  titleText: { text: string };
  releaseDate: {
    day: number;
    month: number;
    year: number;
  };
  primaryImage: {
    id: string;
    url: string;
  };
  titleType: {
    isEpisode: boolean;
    isSeries: boolean;
    id: string;
  };
}
