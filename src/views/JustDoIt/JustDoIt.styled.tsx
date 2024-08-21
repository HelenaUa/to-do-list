import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  position: 'absolute',
  background: '#c5ff41',
  color: '#191919',
  fontSize: '30px',
  fontWeight: 'bold',
  borderRadius: '30px',
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
  padding: '1px 50px',
  marginRight: '4px',
  top: '0',
  right: '0',
  zIndex: 1,

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
