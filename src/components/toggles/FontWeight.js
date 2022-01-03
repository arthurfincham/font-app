import ToggleButton from '@mui/material/ToggleButton';
import { StyledToggleButtonGroup } from '../styled/styledTheme';
import { Typography } from '@mui/material';
import ToggleTooltip from '../ToggleTooltip';
import { WeightContext } from '../../context/WeightContext';
import { useContext } from 'react';

export default function FontWeight() {
  const { myFontWeight, setMyFontWeight } = useContext(WeightContext);
  const handleWeight = (event, newAlignment) => {
    setMyFontWeight(newAlignment);
  };

  return (
    <ToggleTooltip title="Weight">
      <StyledToggleButtonGroup size="small" value={myFontWeight} exclusive onChange={handleWeight} aria-label="text alignment">
        <ToggleButton value="400" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            400
          </Typography>
        </ToggleButton>
        <ToggleButton value="500" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            500
          </Typography>
        </ToggleButton>
        <ToggleButton value="600" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            600
          </Typography>
        </ToggleButton>
        <ToggleButton value="700" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            700
          </Typography>
        </ToggleButton>
        <ToggleButton value="800" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            800
          </Typography>
        </ToggleButton>
      </StyledToggleButtonGroup>
    </ToggleTooltip>
  );
}
