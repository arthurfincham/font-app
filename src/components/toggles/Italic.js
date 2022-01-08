import ToggleButton from '@mui/material/ToggleButton';
import { StyledToggleButtonGroup } from '../styled/styledTheme';
import ToggleTooltip from '../ToggleTooltip';
import { ItalicContext } from '../../context/ItalicContext';
import { useContext } from 'react';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

export default function Single() {
  const { myFontItalic, setMyFontItalic } = useContext(ItalicContext);

  const handleToggle = (event, newStyle) => {
    setMyFontItalic(newStyle);
  };

  return (
    <ToggleTooltip title="Italic">
      <StyledToggleButtonGroup size="small" value={false} exclusive onChange={handleToggle} aria-label="code snippet">
        <ToggleButton value={!myFontItalic} aria-label="left aligned" data-testid="Italic-test">
          <FormatItalicIcon />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </ToggleTooltip>
  );
}
