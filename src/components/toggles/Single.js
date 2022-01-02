import ToggleButton from '@mui/material/ToggleButton';
import { StyledToggleButtonGroup } from '../styled/styledTheme';
import MyTooltip from '../MyTooltip';

export default function Single({ state, setState, title, icon }) {
  const handleToggle = (event, newStyle) => {
    setState(newStyle);
  };

  return (
    <MyTooltip title={title}>
      <StyledToggleButtonGroup size="small" value={false} exclusive onChange={handleToggle} aria-label="code snippet">
        <ToggleButton value={!state} aria-label="left aligned">
          {icon}
        </ToggleButton>
      </StyledToggleButtonGroup>
    </MyTooltip>
  );
}
