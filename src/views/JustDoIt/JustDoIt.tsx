import React from 'react';
import { Box, Typography, InputAdornment } from '@mui/material';
import { StyledButton, StyledTextField } from './JustDoIt.styled';
import { IconButton } from 'ui';

const JustDoIt = () => {
  return (
    <Box
      width="60%"
      display="flex"
      flexDirection="column"
      margin="50px auto"
      // justifyContent="center"
      // alignItems="center"
    >
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="h1"
      >
        Just do it
      </Typography>
      <Box position="relative" marginBottom="50px">
        <StyledTextField placeholder="Add a task" />
        <StyledButton>Ok</StyledButton>
      </Box>
      <Box display="flex" alignItems="center" margin="50px auto">
        <StyledTextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Box display="flex" gap="5px">
                  <IconButton icon="done" />
                  <IconButton icon="delete" />
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default JustDoIt;
