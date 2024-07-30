import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface IContentWrapper {
  children: React.ReactNode | string;
}

// const ContentWrapper = ({ children }: IContentWrapper) => {
//   return (
//     <Container>
//       <Box
//         sx={{
//           bgcolor: '#cfe8fc',
//           // height: '300px',
//           width: '100%',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           // margin: '0px',
//           padding: '0px',
//         }}
//       >
//         {children}
//       </Box>
//     </Container>
//   );
// };

// export default ContentWrapper;

const ContentWrapper = ({ children }: IContentWrapper) => {
  return (
    <Container
      sx={{
        // bgcolor: '#cfe8fc',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
      }}
    >
      <Box
        sx={{
          // bgcolor: '#cfe8fc',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default ContentWrapper;
