import { FC } from 'react';
import { IReview } from '../../../../shared/types';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography
} from '@mui/material';
import { imageUrl } from '../../../../shared/constants/constants';

interface ReviewItemProps {
  review: IReview;
}
const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  const dateObject = new Date(review.created_at);
  const formattedDateTime = dateObject.toLocaleString();

  return (
    <Card
      variant='outlined'
      sx={{
        backgroundColor: 'inherit',
        color: 'white',
        borderColor: 'rgba(255,255,255,0.4)',
        borderRadius: '0'
      }}
    >
      <CardHeader
        title={review.author_details.username || review.author}
        subheader={formattedDateTime}
        avatar={
          <Avatar
            variant='square'
            src={`${imageUrl}${review.author_details.avatar_path}`}
            sx={{ width: '80px', height: '100px' }}
          />
        }
        titleTypographyProps={{
          sx: {
            fontSize: '1rem'
          }
        }}
        subheaderTypographyProps={{
          sx: {
            color: 'rgba(255,255,255,0.4)'
          }
        }}
      />
      <CardContent sx={{ color: 'rgba(255,255,255,0.7)' }}>
        <Typography variant='body1'>{review.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewItem;
