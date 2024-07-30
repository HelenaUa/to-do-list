import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface IIconButtonProps extends IconButtonProps {
  icon?: 'done' | 'delete';
}

export const StyledIconButton = styled(IconButton)<IIconButtonProps>(
  ({ theme, icon }) => ({
    borderRadius: '50%',
    backgroundColor: 'blue',
    color: '#fff',
    '&:hover, &:focus': {
      backgroundColor: 'darkblue',
    },
  })
);
