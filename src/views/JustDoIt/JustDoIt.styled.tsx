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
  padding: '16px 50px',
  top: '2%',
  right: '0',
  zIndex: 1,
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
