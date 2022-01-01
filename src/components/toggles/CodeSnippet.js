import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import CodeIcon from '@mui/icons-material/Code';

export default function CodeSnippet({ codeDisplay, setCodeDisplay }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: '5px 0px ',
    },
  }));

  const handleCode = (event, newCode) => {
    setCodeDisplay(newCode);
  };

  return (
    <StyledToggleButtonGroup size="small" value={false} exclusive onChange={handleCode} aria-label="code snippet">
      <ToggleButton value={!codeDisplay} aria-label="left aligned">
        {codeDisplay ? <CodeOffIcon size="1.5em" /> : <CodeIcon size="1.5em" />}
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
