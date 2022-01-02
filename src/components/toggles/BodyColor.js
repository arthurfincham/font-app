import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { MyToggleButtonGroup, MyToggleButton, MyCircle } from '../styled/styledTheme';

export default function BodyColor({ setBodyColor, bodyColor }) {
  const themeColors = ['#FFF', '#FEF3C7', '#272C35', '#6366F2', '#F23C1F', '#D4D1FF', '#FA8C1E'];

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  const handleColor = (event, newColor) => {
    setBodyColor(newColor);
  };

  return (
    <Box sx={{ width: '50px', position: 'relative', marginInline: '5px' }}>
      <FormControlLabel
        control={
          <ToggleButton checked={checked} onChange={handleCheck}>
            <FormatColorFillIcon htmlColor={bodyColor} />
          </ToggleButton>
        }
        label=""
        sx={{ margin: '0 auto' }}
      />
      <Collapse in={checked} collapsedSize={0} sx={{ position: 'absolute', right: '-5px', top: '70px' }}>
        <MyToggleButtonGroup size="small" value={bodyColor} exclusive onChange={handleColor} aria-label="site theme" orientation="vertical">
          {themeColors.map((color) => {
            return (
              <MyToggleButton value={color} aria-label="left aligned" sx={{ zIndex: 10 }}>
                <MyCircle color={color} />
              </MyToggleButton>
            );
          })}
        </MyToggleButtonGroup>
      </Collapse>
    </Box>
  );
}
