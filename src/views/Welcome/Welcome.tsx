import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import HomeImage from '../../assets/images/home.jpg';
import { Loader, ContentWrapper } from 'ui';

const Welcome = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ContentWrapper>
      {loading ? (
        <Loader />
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Typography variant="h1" color="#fff">
            Welcome to the home page!
          </Typography>
          <Box component="img" alt="Home" src={HomeImage} />
        </Box>
      )}
    </ContentWrapper>
  );
};

export default Welcome;
