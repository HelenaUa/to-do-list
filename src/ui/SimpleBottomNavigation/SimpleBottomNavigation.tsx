import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import GradingIcon from '@mui/icons-material/Grading';
import EventNoteIcon from '@mui/icons-material/EventNote';
import {
  StyledBottomNavigation,
  StyledBottomNavigationAction,
} from './SimpleBottomNavigation.styled';

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
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [location]);

  return (
    <div>
      <Box width="100%" padding="20px 0px">
        <StyledBottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(navigationItems[newValue].path);
          }}
        >
          {navigationItems.map((item, index) => (
            <StyledBottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </StyledBottomNavigation>
      </Box>
    </div>
  );
};

export default SimpleBottomNavigation;
