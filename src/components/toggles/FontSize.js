import ToggleButton from '@mui/material/ToggleButton';
import AbcIcon from '@mui/icons-material/Abc';
import { styled } from '@mui/system';
import ToggleTooltip from '../ToggleTooltip';
import { StyledToggleButtonGroup } from '../styled/styledTheme';
import { SizeContext } from '../../context/SizeContext';
import { useContext } from 'react';

export default function FontSize() {
  const StyledIcon = styled(AbcIcon)(({ size }) => ({
    fontSize: size,
  }));

  const { myFontSize, setMyFontSize } = useContext(SizeContext);

  const handleSize = (event, newAlignment) => {
    setMyFontSize(newAlignment);
  };

  return (
    <ToggleTooltip title="Size">
      <StyledToggleButtonGroup size="small" value={myFontSize} exclusive onChange={handleSize} aria-label="text alignment">
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
