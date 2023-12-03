import { useMovies } from '../hooks/useMovies';

const MainPage = () => {
  const { isLoading, data } = useMovies();
  console.log(data);
  return (
    <div>
      {data?.map((movie) => (
        <div>{movie.titleText.text}</div>
      ))}
    </div>
  );
};

export default MainPage;
