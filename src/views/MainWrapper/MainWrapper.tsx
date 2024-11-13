import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header, SimpleBottomNavigation } from 'ui';

const MainWrapper = () => {
  return (
    <Box bgcolor="#898a8a" width="100%" padding="0px">
      <Header />
      <SimpleBottomNavigation />
      <Outlet />
    </Box>
  );
};

export default MainWrapper;
