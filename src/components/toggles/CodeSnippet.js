import ToggleButton from '@mui/material/ToggleButton';
import { StyledToggleButtonGroup } from '../styled/styledTheme';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeIcon from '@mui/icons-material/Code';
import MyTooltip from '../MyTooltip';

export default function CodeSnippet({ codeDisplay, setCodeDisplay }) {
  const handleCode = (event, newCode) => {
    setCodeDisplay(newCode);
  };

  return (
    <MyTooltip title="Code">
      <StyledToggleButtonGroup size="small" value={false} exclusive onChange={handleCode} aria-label="code snippet">
        <ToggleButton value={!codeDisplay} aria-label="left aligned">
          {codeDisplay ? <CodeOffIcon size="1.5em" /> : <CodeIcon size="1.5em" />}
        </ToggleButton>
      </StyledToggleButtonGroup>
    </MyTooltip>
  );
}
