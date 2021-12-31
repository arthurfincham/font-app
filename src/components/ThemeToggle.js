import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import Paper from '@mui/material/Paper';

export default function ThemeToggle({ siteTheme, setSiteTheme }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: '5px 0px ',
    },
  }));

  const StyledBackground = styled(Paper)(({ color }) => ({
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35px',
    width: '35px',
  }));

  const handleSiteTheme = (event, newSiteTheme) => {
    setSiteTheme(newSiteTheme);
  };

  const StyledIcon = styled(InvertColorsIcon)(({ color }) => ({
    color: color,
  }));

  return (
    <StyledToggleButtonGroup size="small" value={siteTheme} exclusive onChange={handleSiteTheme} aria-label="site theme">
      <ToggleButton value="Dark" aria-label="left aligned">
        <StyledBackground color="#232324">
          <StyledIcon color="#FFF" />
        </StyledBackground>
      </ToggleButton>
      <ToggleButton value="Light" aria-label="left aligned">
        <StyledBackground color="#FFF">
          <StyledIcon color="#000" />
        </StyledBackground>
      </ToggleButton>
      <ToggleButton value="Yellow" aria-label="left aligned">
        <StyledBackground color="#FFF4C7">
          <StyledIcon color="#312E80" />
        </StyledBackground>
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
