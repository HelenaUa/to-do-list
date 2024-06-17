import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import GradingIcon from '@mui/icons-material/Grading';
import EventNoteIcon from '@mui/icons-material/EventNote';
// import { Typography } from '@mui/material';

const navigationItems = [
  { label: 'Home', icon: <HomeIcon />, path: '/' },
  { label: 'ToDoList', icon: <GradingIcon />, path: '/to_do_list' },
  { label: 'Quotes', icon: <EventNoteIcon />, path: '/quotes' },
];

const SimpleBottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = navigationItems.findIndex(
      item => item.path === currentPath
    );
    // console.log(`Current path: ${currentPath}, Index: ${currentIndex}`);
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [location]);

  return (
    <div>
      <Box width="100%" padding="20px">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            // console.log(`Navigating to: ${navigationItems[newValue].path}`);
            setValue(newValue);
            navigate(navigationItems[newValue].path);
          }}
        >
          {navigationItems.map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </BottomNavigation>
      </Box>
      {/* <Typography fontWeight="500" fontSize="78px">
        Coffe
        <span role="img">💻📝☕(❁´◡`❁)💁‍♀️💻📝☕☑</span>
      </Typography> */}
    </div>
  );
};

export default SimpleBottomNavigation;
