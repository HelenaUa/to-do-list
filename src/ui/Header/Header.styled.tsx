import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import AdbIcon from '@mui/icons-material/Adb';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#2b2c2d',
}));

export const StyledAdbIcon = styled(AdbIcon)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  marginRight: theme.spacing(1),
}));
