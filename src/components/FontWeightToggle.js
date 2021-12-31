import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';

export default function FontWeightToggle({ fontWeight, setFontWeight }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      border: 0,
      '&.Mui-disabled': {
        border: 0,
      },
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }));
  const handleWeight = (event, newAlignment) => {
    setFontWeight(newAlignment);
  };
  return (
    <StyledToggleButtonGroup size="small" value={fontWeight} exclusive onChange={handleWeight} aria-label="text alignment">
      <ToggleButton value="400" aria-label="left aligned">
        <p>400</p>
      </ToggleButton>
      <ToggleButton value="600" aria-label="left aligned">
        <p>600</p>
      </ToggleButton>
      <ToggleButton value="800" aria-label="left aligned">
        <p>800</p>
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
