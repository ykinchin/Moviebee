import { FC } from 'react';
import { IReview } from '../../../../shared/types';
import { Box } from '@mui/material';
import ReviewItem from './ReviewItem';

interface ReviewsSectionProps {
  reviews: IReview[];
}

const ReviewsSection: FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        mb: 10
      }}
    >
      {reviews.map((review) => (
        <ReviewItem review={review} />
      ))}
    </Box>
  );
};

export default ReviewsSection;
