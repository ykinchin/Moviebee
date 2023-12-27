import { FC, useState } from 'react';
import { ICredits } from '../../shared/types';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  CardHeader
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { imageUrl } from '../../shared/constants/constants';

interface CreditsSectionProps {
  credits: ICredits;
  title: string;
}

const CreditsSection: FC<CreditsSectionProps> = ({ credits, title }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ textTransform: 'uppercase', fontSize: '24px' }}>
          {title}
        </Typography>
        <ArrowDropDownIcon
          onClick={() => setIsOpened(!isOpened)}
          sx={{ fontSize: '3rem', rotate: `${!isOpened && '90deg'}` }}
        />
      </Box>
      {isOpened && (
        <Box>
          {credits.cast.map((person) => (
            <Card
              variant='outlined'
              key={person.id}
              sx={{
                backgroundColor: 'inherit',
                mb: 1,
                color: 'white',
                borderBottom: '1px solid rgba(255,255,255,0.4)'
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    variant='square'
                    sx={{ width: '80px', height: '120px' }}
                    src={`${imageUrl}${person.profile_path}`}
                    alt={person.name}
                  />
                }
                title={person.name}
                subheader={person.character}
                titleTypographyProps={{ sx: { fontSize: '1.5rem' } }}
                subheaderTypographyProps={{
                  sx: {
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '1rem'
                  }
                }}
              />
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CreditsSection;