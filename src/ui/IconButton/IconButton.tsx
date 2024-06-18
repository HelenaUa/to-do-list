import React from 'react';
import { StyledIconButton } from './IconButton.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

interface IIconButtonProps {
  icon?: 'done' | 'delete';
  onClick?: () => void;
}

const IconButton = ({ icon, onClick }: IIconButtonProps) => {
  return (
    <StyledIconButton onClick={onClick}>
      {icon === 'done' ? <DoneIcon /> : <DeleteIcon />}
    </StyledIconButton>
  );
};

export default IconButton;
