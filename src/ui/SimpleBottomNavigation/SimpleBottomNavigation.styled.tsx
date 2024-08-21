import { styled } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  backgroundColor: '#898a8a', // #191919 #319f1f #898a8a
}));

export const StyledBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    color: '#2b2c2d',
    '&:focus': {
      color: '#c5ff41',
    },
    '&.Mui-selected': {
      // селектор для активного стану
      color: '#c5ff41',
    },
  })
);
