import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Typography } from '@mui/material';

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  position: 'absolute',
  background: '#c5ff41',
  color: '#191919',
  fontSize: '20px',
  fontWeight: 'bold',
  borderRadius: '30px',
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
  padding: '10px 50px',
  boxShadow:
    '0px 0px 15px 5px rgba(197, 255, 65, 0.5), -2px 0px 30px -10px #ff0066',
  top: '0',
  right: '0',
  zIndex: 1,
  [theme.breakpoints.up('sm')]: {
    padding: '10px 50px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '30px',
    padding: '1px 50px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '30px',
  },

  '&:hover, &:focus': {
    backgroundColor: '#0dcaf0',
  },
}));

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px',
      '& input': {
        paddingLeft: '30px',
      },
      '& fieldset': {
        borderRadius: '30px',
      },
    },
  })
);

export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontSize: '16px',
  marginTop: '20px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '68px',
  },
}));
