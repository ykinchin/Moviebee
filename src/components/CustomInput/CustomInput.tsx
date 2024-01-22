import { ChangeEvent, FC } from 'react';

import { TextField } from '@mui/material';

interface CustomInputProps {
  id: string;
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<CustomInputProps> = ({ id, label, onChange }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="standard"
      InputLabelProps={{ style: { color: 'white' } }}
      InputProps={{ style: { color: 'white' } }}
      onChange={onChange}
    />
  );
};

export default CustomInput;
