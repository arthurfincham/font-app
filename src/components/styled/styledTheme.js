import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from '@mui/system';

export const MyToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: '0px 0px ',
    backgroundColor: '#FFF',
    opacity: 1,
  },
  '& .MuiToggleButtonGroup-grouped:hover': {
    backgroundColor: '#D9D9D9',
    opacity: 1,
  },
  '& .MuiToggleButtonGroup-grouped.Mui-selected': {
    backgroundColor: '#EBEBEB',
    opacity: 1,
  },
  '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
    borderTop: '1px solid #BABABA',
  },
}));

export const MyToggleButton = styled(ToggleButton)(() => ({
  backgroundColor: '#EBEBEB',
  border: '1px solid #BABABA',
}));

export const MyCircle = styled(CircleIcon)(({ color }) => ({
  color: color,
  fontSize: '2em',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  borderRadius: '50%',
  backgroundColor: 'black',
}));
