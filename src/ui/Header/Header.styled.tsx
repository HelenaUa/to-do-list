import { styled } from '@mui/material/styles';
import AdbIcon from '@mui/icons-material/Adb';

export const StyledAdbIcon = styled(AdbIcon)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  marginRight: theme.spacing(1),
}));
