import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { DropdownToggleGroup, DropdownToggle, DropdownCircle } from '../styled/styledTheme';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { BodyColorContext } from '../../context/BodyColorContext';
import { useContext } from 'react';

export default function BodyColor() {
  const themeColors = ['#FFF', '#FEF3C7', '#272C35', '#6366F2', '#F23C1F', '#D4D1FF', '#FA8C1E'];

  const [checked, setChecked] = useState(false);

  const { myBodyColor, setMyBodyColor } = useContext(BodyColorContext);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  const handleColor = (event, newColor) => {
    setMyBodyColor(newColor);
  };

  return (
    <Box sx={{ width: '50px', position: 'relative', marginInline: '5px' }}>
      <FormControlLabel
        control={
          <ToggleButton value={checked} onChange={handleCheck}>
            <FormatColorFillIcon />
          </ToggleButton>
        }
        label=""
        sx={{ margin: '0 auto' }}
      />
      <Collapse in={checked} collapsedSize={0} sx={{ position: 'absolute', right: '-5px', top: '70px' }}>
        <DropdownToggleGroup size="small" value={myBodyColor} exclusive onChange={handleColor} aria-label="site theme" orientation="vertical">
          {themeColors.map((color) => {
            return (
              <DropdownToggle key={color} value={color} aria-label="left aligned" sx={{ zIndex: 10 }}>
                <DropdownCircle color={color} />
              </DropdownToggle>
            );
          })}
        </DropdownToggleGroup>
      </Collapse>
    </Box>
  );
}
