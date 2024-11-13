import React from 'react';
import Box from '@mui/material/Box';

interface IContentWrapper {
  children: React.ReactNode | string;
}

const ContentWrapper = ({ children }: IContentWrapper) => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="0px"
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;
