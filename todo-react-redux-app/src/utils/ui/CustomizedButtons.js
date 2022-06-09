import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const DeleteButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[900]),
  height: '35px',
  backgroundColor: red[900],
  '&:focus': {
    outline: 'none'
  },
  '&:hover': {
    backgroundColor: red[700]
  }
}));

export {
  DeleteButton
};