import React from 'react';
import Box from '@mui/material/Box';
import HomeImage from '../../assets/images/home.jpg';
import { ContentWrapper } from 'ui';

const Home = () => {
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
      </Box>
    </ContentWrapper>
  );
};

export default Home;
