import React from 'react';
import Box from '@mui/material/Box';
import { StyledContainer } from '../ContentWrapper/ContentWrapper.styled';

interface IContentWrapper {
  children: React.ReactNode | string;
}

const ContentWrapper = ({ children }: IContentWrapper) => {
  return (
    <StyledContainer>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="0px"
      >
        {children}
      </Box>
    </StyledContainer>
  );
};

export default ContentWrapper;
