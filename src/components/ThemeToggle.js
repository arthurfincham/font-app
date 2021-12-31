import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';

export default function ThemeToggle({ siteTheme, setSiteTheme }) {
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
  const handleSiteTheme = (event, newSiteTheme) => {
    setSiteTheme(newSiteTheme);
  };
  return (
    <StyledToggleButtonGroup size="small" value={siteTheme} exclusive onChange={handleSiteTheme} aria-label="text alignment">
      <ToggleButton value="Dark" aria-label="left aligned">
        <p>Dark</p>
      </ToggleButton>
      <ToggleButton value="Light" aria-label="left aligned">
        <p>Light</p>
      </ToggleButton>
      <ToggleButton value="Yellow" aria-label="left aligned">
        <p>Yellow</p>
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
