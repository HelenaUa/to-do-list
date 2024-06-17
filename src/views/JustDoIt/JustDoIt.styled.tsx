import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  position: 'absolute',
  background: '#12A0DD',
  color: '#fff',
  borderRadius: '30px',
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
  padding: '13px 50px',
  top: '5%',
  right: '0',
  zIndex: 1,
}));

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    width: '100%',
    '& .MuiOutlinedInput-root': {
      // borderRadius: '30px',
      paddingLeft: '25px',
      '& fieldset': {
        borderRadius: '30px',
      },
    },
  })
);
