import React from 'react';
import { Box } from '@mui/material';
import { JustDoIt } from 'views';

const ToDoList = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="auto"
      // backgroundColor="cyan"
    >
      <JustDoIt text="text" completed />
    </Box>
  );
};

export default ToDoList;
