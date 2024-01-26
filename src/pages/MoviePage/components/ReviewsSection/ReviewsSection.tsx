import { FC } from 'react';

import { Box } from '@mui/material';

import { IReview } from '../../../../shared/types';
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
        mb: 10,
      }}
    >
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </Box>
  );
};

export default ReviewsSection;
