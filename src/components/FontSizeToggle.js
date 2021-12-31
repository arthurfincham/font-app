import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';

export default function FontSizeToggle({ fontSize, setFontSize }) {
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
  const handleSize = (event, newAlignment) => {
    setFontSize(newAlignment);
  };
  return (
    <StyledToggleButtonGroup size="small" value={fontSize} exclusive onChange={handleSize} aria-label="text alignment">
      <ToggleButton value="1" aria-label="left aligned">
        <p>S</p>
      </ToggleButton>
      <ToggleButton value="1.5" aria-label="left aligned">
        <p>M</p>
      </ToggleButton>
      <ToggleButton value="2" aria-label="left aligned">
        <p>L</p>
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
