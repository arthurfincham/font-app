import ToggleButton from '@mui/material/ToggleButton';
import { StyledToggleButtonGroup } from '../styled/styledTheme';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import MyTooltip from '../MyTooltip';

export default function FontItalic({ fontItalic, setFontItalic }) {
  const handleToggle = (event, newStyle) => {
    setFontItalic(newStyle);
  };

  return (
    <MyTooltip title="Italic">
      <StyledToggleButtonGroup size="small" value={false} exclusive onChange={handleToggle} aria-label="code snippet">
        <ToggleButton value={!fontItalic} aria-label="left aligned">
          <FormatItalicIcon size="1.5em" />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </MyTooltip>
  );
}
