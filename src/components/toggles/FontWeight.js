import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import MyTooltip from '../MyTooltip';
export default function FontWeight({ fontWeight, setFontWeight }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: '5px 0px ',
    },
  }));
  const handleWeight = (event, newAlignment) => {
    setFontWeight(newAlignment);
  };
  return (
    <MyTooltip title="Weight">
      <StyledToggleButtonGroup size="small" value={fontWeight} exclusive onChange={handleWeight} aria-label="text alignment">
        <ToggleButton value="400" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            400
          </Typography>
        </ToggleButton>
        <ToggleButton value="500" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            500
          </Typography>
        </ToggleButton>
        <ToggleButton value="600" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            600
          </Typography>
        </ToggleButton>
        <ToggleButton value="700" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            700
          </Typography>
        </ToggleButton>
        <ToggleButton value="800" aria-label="left aligned">
          <Typography variant="button" sx={{ fontWeight: 'bold' }}>
            800
          </Typography>
        </ToggleButton>
      </StyledToggleButtonGroup>
    </MyTooltip>
  );
}
