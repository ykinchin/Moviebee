import { FC, useState } from 'react';
import { ICredits } from '../../shared/types';
import {
  Box,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
interface CreditsSectionProps {
  credits: ICredits;
  title: string;
}

const CreditsSection: FC<CreditsSectionProps> = ({ credits, title }) => {

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
    </Box>
  );
};

export default CreditsSection;
