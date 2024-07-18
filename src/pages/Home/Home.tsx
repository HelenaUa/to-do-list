import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import HomeImage from '../../assets/images/home.jpg';
import { Loader, ContentWrapper } from 'ui';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ContentWrapper>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="20px"
      >
        <div>Welcome to the home page!</div>
        {loading ? (
          <Loader />
        ) : (
          <Box
            component="img"
            // sx={{
            //   height: 300,
            //   width: '100%',
            //   maxHeight: { xs: 233, md: 167 },
            //   maxWidth: { xs: 350, md: 250 },
            // }}
            // height={300}
            // width="100%"
            alt="Home"
            src={HomeImage}
          />
        )}
      </Box>
    </ContentWrapper>
  );
};

export default Home;
