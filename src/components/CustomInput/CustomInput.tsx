import { FC } from 'react';

import { TextField } from '@mui/material';

interface CustomInputProps {
  id: string;
  label: string;
}

const CustomInput: FC<CustomInputProps> = ({ id, label }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="standard"
      InputLabelProps={{ style: { color: 'white' } }}
      InputProps={{ style: { color: 'white' } }}
    />
  );
};

export default CustomInput;
