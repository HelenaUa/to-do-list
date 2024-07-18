import { styled } from '@mui/material/styles';
import Container, { ContainerProps } from '@mui/material/Container';
// import Box, { BoxProps } from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';

interface IContainerProps extends ContainerProps {
  backgroundcolor: string;
}

export const StyledContainer = styled(Container)<IContainerProps>(
  ({ theme, backgroundcolor }) => ({
    position: 'relative',
    backgroundColor: backgroundcolor,
    width: '80%',
    height: '600px',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
  })
);

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  // position: 'relative',
  padding: '15px 50px 15px',
  border: '2ps solid #ff0066',
  borderRadius: '30px',
  boxShadow: '-2px 0px 44px -10px #ff0066',
  backgroundColor: 'rgba(255, 254, 254, 0.2)',
  backdropFilter: 'blur(10)',
  color: '#fff',
  textAlign: 'center',
  zIndex: '2',
  position: 'absolute',
  bottom: '40px',
  right: '39%',
}));
