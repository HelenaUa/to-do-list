import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Loader, ContentWrapper } from 'ui';
import { StyledTypography, WrapperImage } from './Welcome.styled';

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
          <StyledTypography variant="h1">
            Welcome to the home page!
          </StyledTypography>
          <WrapperImage />
        </Box>
      )}
    </ContentWrapper>
  );
};

export default Welcome;
