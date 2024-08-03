import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ILoader {
  size?: number;
  marginLeft?: string;
}

const Loader = ({ size, marginLeft }: ILoader) => {
  return (
    <Box display="flex" marginLeft={marginLeft}>
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loader;
