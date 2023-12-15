import { FC } from 'react';
import { useParams } from 'react-router-dom';

const MovieCard: FC = () => {
  const { id, category } = useParams();
  return (
    <div>
      {category}
      {id}
    </div>
  );
};

export default MovieCard;
