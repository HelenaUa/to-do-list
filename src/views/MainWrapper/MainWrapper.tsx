import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, SimpleBottomNavigation } from 'ui';

const MainWrapper = () => {
  return (
    <div>
      <Header />
      <SimpleBottomNavigation />
      <Outlet />
    </div>
  );
};

export default MainWrapper;
