import ToggleButton from '@mui/material/ToggleButton';
import { StyledToggleButtonGroup } from '../styled/styledTheme';
import ToggleTooltip from '../ToggleTooltip';
import { CodeSnippetContext } from '../../context/CodeSnippetContext';
import { useContext } from 'react';
import CodeIcon from '@mui/icons-material/Code';

export default function Single() {
  const { myCodeSnippet, setMyCodeSnippet } = useContext(CodeSnippetContext);

  const handleToggle = (event, newStyle) => {
    setMyCodeSnippet(newStyle);
  };

  return (
    <ToggleTooltip title="Code Snippet">
      <StyledToggleButtonGroup size="small" value={false} exclusive onChange={handleToggle} aria-label="code snippet">
        <ToggleButton value={!myCodeSnippet} aria-label="left aligned">
          <CodeIcon />
        </ToggleButton>
      </StyledToggleButtonGroup>
    </ToggleTooltip>
  );
}
