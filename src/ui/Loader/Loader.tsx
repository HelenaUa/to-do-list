import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box display="flex">
      <CircularProgress size={190} />
    </Box>
  );
};

export default Loader;
