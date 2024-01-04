import { FC, useState } from 'react';
import { ICredits } from '../../../../shared/types';
import { Box, Typography, Card, Avatar, CardHeader } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { imageUrl } from '../../../../shared/constants/constants';
import { useNavigate } from 'react-router-dom';

interface CreditsSectionProps {
  credits: ICredits;
  title: string;
}

const CreditsSection: FC<CreditsSectionProps> = ({ credits, title }) => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <Box mb={10}>
      <Box
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => setIsOpened(!isOpened)}
      >
        <Typography sx={{ textTransform: 'uppercase', fontSize: '24px' }}>
          {title}
        </Typography>
        <ArrowDropDownIcon
          sx={{ fontSize: '3rem', rotate: `${!isOpened && '90deg'}` }}
        />
      </Box>
      {isOpened && (
        <Box>
          {credits.cast.map((person) => (
            <Card
              onClick={() => navigate(`/credits/${person.id}`)}
              variant='outlined'
              key={person.id}
              sx={{
                backgroundColor: 'inherit',
                mb: 1,
                color: 'white',
                borderBottomColor: 'rgba(255,255,255,0.4)',
                borderRadius: '0',
                cursor: 'pointer'
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
