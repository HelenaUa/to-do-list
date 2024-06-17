import React from 'react';
import { StyledIconButton } from './IconButton.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

interface IIconButtonProps {
  icon?: 'done' | 'delete';
}

const IconButton = ({ icon }: IIconButtonProps) => {
  return (
    <StyledIconButton>
      {icon === 'done' ? <DoneIcon /> : <DeleteIcon />}
    </StyledIconButton>
  );
};

export default IconButton;
