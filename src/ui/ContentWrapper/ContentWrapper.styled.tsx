import { styled } from '@mui/material/styles';
import Container, { ContainerProps } from '@mui/material/Container';

export const StyledContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
  })
);
