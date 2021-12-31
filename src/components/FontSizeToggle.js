import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';

import AbcIcon from '@mui/icons-material/Abc';

export default function FontSizeToggle({ fontSize, setFontSize }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: '5px 0px ',
    },
  }));

  const StyledIcon = styled(AbcIcon)(({ size }) => ({
    fontSize: size,
  }));

  const handleSize = (event, newAlignment) => {
    setFontSize(newAlignment);
  };
  return (
    <StyledToggleButtonGroup size="small" value={fontSize} exclusive onChange={handleSize} aria-label="text alignment">
      <ToggleButton value="1" aria-label="left aligned">
        <StyledIcon size="1.5em" />
      </ToggleButton>
      <ToggleButton value="1.5" aria-label="left aligned">
        <StyledIcon size="2.5em" />
      </ToggleButton>
      <ToggleButton value="2" aria-label="left aligned">
        <StyledIcon size="3.5em" />
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
