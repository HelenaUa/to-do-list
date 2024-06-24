import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header, SimpleBottomNavigation } from 'ui';

const MainWrapper = () => {
  return (
    <Box bgcolor="#cfe8fc">
      <Header />
      <SimpleBottomNavigation />
      <Outlet />
    </Box>
  );
};

export default MainWrapper;
