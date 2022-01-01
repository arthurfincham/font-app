import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';
import { useState } from 'react';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import CircleIcon from '@mui/icons-material/Circle';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

export default function ThemeToggle({ setBodyColor, bodyColor, setTextColor, textColor }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: '0px 0px ',
      backgroundColor: '#EBEBEB',
      opacity: 1,
    },
    '& .MuiToggleButtonGroup-grouped:hover': {
      backgroundColor: '#D9D9D9',
      opacity: 1,
    },
    '&.MuiToggleButton-root.Mui-selected': {
      backgroundColor: 'red',
    },
    '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
      borderTop: '1px solid #BABABA',
    },
  }));

  const StyledToggleButton = styled(ToggleButton)(() => ({
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

  const StyledCircle = styled(CircleIcon)(({ color }) => ({
    color: color,
    fontSize: '2em',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    borderRadius: '50%',
    backgroundColor: color,
  }));

  const StyledTextIcon = styled(FormatColorTextIcon)(({ color }) => ({
    color: color,
    fontSize: '2em',
  }));

  const [bodyChecked, setBodyChecked] = useState(false);

  const handleBodyChange = () => {
    setBodyChecked((prev) => !prev);
  };

  const [textChecked, setTextChecked] = useState(false);

  const handleTextChange = () => {
    setTextChecked((prev) => !prev);
  };

  const themeColors = ['#FFF', '#FEF3C7', '#272C35', '#6366F2', '#F23C1F', '#D4D1FF', '#FA8C1E'];

  return (
    <>
      <Box sx={{ width: '50px', position: 'relative' }}>
        <FormControlLabel
          control={
            <ToggleButton checked={bodyChecked} onChange={handleBodyChange}>
              <FormatColorFillIcon />
            </ToggleButton>
          }
          label=""
          sx={{ margin: '0 auto' }}
        />
        <Collapse in={bodyChecked} collapsedSize={0} sx={{ position: 'absolute', right: '-5px', top: '70px' }}>
          <StyledToggleButtonGroup size="small" value={bodyColor} exclusive onChange={handleBodyColor} aria-label="site theme" orientation="vertical">
            {themeColors.map((color) => {
              return (
                <StyledToggleButton value={color} aria-label="left aligned" sx={{ zIndex: 10 }}>
                  <StyledCircle color={color} />
                </StyledToggleButton>
              );
            })}
          </StyledToggleButtonGroup>
        </Collapse>
      </Box>
      <Box sx={{ width: '50px', position: 'relative' }}>
        <FormControlLabel
          control={
            <ToggleButton checked={textChecked} onChange={handleTextChange}>
              <FormatColorTextIcon />
            </ToggleButton>
          }
          label=""
          sx={{ margin: '0 auto' }}
        />
        <Collapse in={textChecked} collapsedSize={0} sx={{ position: 'absolute', right: '-5px', top: '70px' }}>
          <StyledToggleButtonGroup size="small" value={textColor} exclusive onChange={handleTextColor} aria-label="site theme" orientation="vertical">
            {themeColors.map((color) => {
              return (
                <StyledToggleButton value={color} aria-label="left aligned" sx={{ zIndex: 10 }}>
                  <StyledCircle color={color} />
                </StyledToggleButton>
              );
            })}
          </StyledToggleButtonGroup>
        </Collapse>
      </Box>
    </>
  );
}
