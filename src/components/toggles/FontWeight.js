import ToggleButton from '@mui/material/ToggleButton';
import { StyledToggleButtonGroup } from '../styled/styledTheme';
import { Typography } from '@mui/material';
import ToggleTooltip from '../ToggleTooltip';
import { WeightContext } from '../../context/WeightContext';
import { useContext } from 'react';

export default function FontWeight() {
  const fontWeights = [400, 500, 600, 700, 800];
  const { myFontWeight, setMyFontWeight } = useContext(WeightContext);
  const handleWeight = (event, newAlignment) => {
    setMyFontWeight(newAlignment);
  };

  return (
    <ToggleTooltip title="Weight">
      <StyledToggleButtonGroup size="small" value={myFontWeight} exclusive onChange={handleWeight} aria-label="text alignment">
        {fontWeights.map((weight) => {
          return (
            <ToggleButton key={weight} value={`${weight}`} aria-label="left aligned">
              <Typography variant="button" sx={{ fontWeight: 'bold' }}>
                {weight}
              </Typography>
            </ToggleButton>
          );
        })}
      </StyledToggleButtonGroup>
    </ToggleTooltip>
  );
}
