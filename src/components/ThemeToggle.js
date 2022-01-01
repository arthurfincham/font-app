import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import Paper from '@mui/material/Paper';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ThemeToggle({ setBodyColor, bodyColor, setTextColor, textColor }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: '5px 0px ',
    },
    '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
      borderLeft: '1px solid #BABABA',
    },
  }));

  const StyledToggleButton = styled(ToggleButton)(({ color }) => ({
    backgroundColor: '#EBEBEB',
    border: '1px solid #BABABA',
  }));

  const handleBodyColor = (event, newSiteTheme) => {
    setBodyColor(newSiteTheme);
  };

  const handleTextColor = (event, newSiteTheme) => {
    setTextColor(newSiteTheme);
  };

  const StyledBodyIcon = styled(FormatColorFillIcon)(({ color }) => ({
    color: color,
    fontSize: '2em',
  }));

  const StyledTextIcon = styled(FormatColorTextIcon)(({ color }) => ({
    color: color,
    fontSize: '2em',
  }));

  return (
    <>
      <StyledToggleButtonGroup size="small" value={bodyColor} exclusive onChange={handleBodyColor} aria-label="site theme">
        <StyledToggleButton value="#FFF" aria-label="left aligned">
          <StyledBodyIcon color="#FFF" />
        </StyledToggleButton>
        <StyledToggleButton value="#FEF3C7" aria-label="left aligned">
          <StyledBodyIcon color="#FEF3C7" />
        </StyledToggleButton>
        <StyledToggleButton value="#272C35" aria-label="left aligned">
          <StyledBodyIcon color="#272C35" />
        </StyledToggleButton>
      </StyledToggleButtonGroup>

      <StyledToggleButtonGroup size="small" value={textColor} exclusive onChange={handleTextColor} aria-label="site theme">
        <StyledToggleButton value="#FFF" aria-label="left aligned">
          <StyledTextIcon color="#FFF" />
        </StyledToggleButton>
        <StyledToggleButton value="#FEF3C7" aria-label="left aligned">
          <StyledTextIcon color="#FEF3C7" />
        </StyledToggleButton>
        <StyledToggleButton value="#272C35" aria-label="left aligned">
          <StyledTextIcon color="#272C35" />
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </>
  );
}
