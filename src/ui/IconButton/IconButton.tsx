import React from 'react';
import { StyledIconButton } from './IconButton.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

interface IIconButtonProps {
  iconType?: 'done' | 'delete';
  completed?: boolean;
  onClick?: () => void;
}

const IconButton = ({ iconType, completed, onClick }: IIconButtonProps) => {
  return (
    <StyledIconButton onClick={onClick} icontype={iconType} completed>
      {iconType === 'done' ? <DoneIcon /> : <DeleteIcon />}
    </StyledIconButton>
  );
};

export default IconButton;
