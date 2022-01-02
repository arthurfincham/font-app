import ToggleButton from '@mui/material/ToggleButton';
import AbcIcon from '@mui/icons-material/Abc';
import { styled } from '@mui/system';
import ToggleTooltip from '../ToggleTooltip';
import { StyledToggleButtonGroup } from '../styled/styledTheme';

export default function FontSize({ fontSize, setFontSize }) {
  const StyledIcon = styled(AbcIcon)(({ size }) => ({
    fontSize: size,
  }));

  const handleSize = (event, newAlignment) => {
    setFontSize(newAlignment);
  };
  return (
    <ToggleTooltip title="Size">
      <StyledToggleButtonGroup size="small" value={fontSize} exclusive onChange={handleSize} aria-label="text alignment">
        <ToggleButton value="1.5" aria-label="left aligned">
          <StyledIcon size="1.5em" />
        </ToggleButton>
        <ToggleButton value="2" aria-label="left aligned">
          <StyledIcon size="2.5em" />
        </ToggleButton>
        <ToggleButton value="2.5" aria-label="left aligned">
          <StyledIcon size="3.5em" />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </ToggleTooltip>
  );
}
