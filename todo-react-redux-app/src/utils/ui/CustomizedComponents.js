import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { blue } from '@mui/material/colors';

const CreateInput = styled(Input)(({ theme }) => ({
  height: '35px'
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[900]),
  height: '35px',
  backgroundColor: blue[900],
  '&:focus': {
    outline: 'none'
  },
  '&:hover': {
    backgroundColor: blue[700]
  }
}));

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

const EditButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[900]),
  height: '35px',
  backgroundColor: green[900],
  '&:focus': {
    outline: 'none'
  },
  '&:hover': {
    backgroundColor: green[700]
  }
}));

export {
  CreateInput,
  SubmitButton,
  DeleteButton,
  EditButton
};