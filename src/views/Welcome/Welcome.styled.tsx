import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import HomeImage from '../../assets/images/home.jpg';

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontSize: '16px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '68px',
  },
}));

export const WrapperImage = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${HomeImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  minHeight: '130px',
  [theme.breakpoints.up('sm')]: {
    minHeight: '200px',
  },
  [theme.breakpoints.up('md')]: {
    minHeight: '270px',
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: '550px',
  },
}));
