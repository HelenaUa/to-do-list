import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface IIconButtonProps extends IconButtonProps {
  icontype?: 'done' | 'delete';
  completed?: boolean;
}

export const StyledIconButton = styled(IconButton)<IIconButtonProps>(
  ({ theme, icontype, completed }) => ({
    borderRadius: '50%',
    // backgroundColor: icontype === 'done' ? '#20c997' : '#dc3545',
    backgroundColor:
      !completed && icontype === 'done'
        ? 'darkgreen'
        : icontype === 'done'
        ? '#20c997'
        : '#dc3545',
    color: '#fff',
    '&:hover, &:focus, &:active': {
      backgroundColor: icontype === 'done' ? '#20c997' : '#dc3545',
    },
  })
);
