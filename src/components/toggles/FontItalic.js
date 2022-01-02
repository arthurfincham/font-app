import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import MyTooltip from '../MyTooltip';

export default function FontItalic({ fontItalic, setFontItalic }) {
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: '5px 0px ',
    },
  }));

  const handleToggle = (event, newStyle) => {
    setFontItalic(newStyle);
  };

  return (
    <StyledToggleButtonGroup size="small" value={false} exclusive onChange={handleToggle} aria-label="code snippet">
      <MyTooltip title="Italic" subTitle="Please note that not all fonts are italic.">
        <ToggleButton value={!fontItalic} aria-label="left aligned">
          <FormatItalicIcon size="1.5em" />
        </ToggleButton>
      </MyTooltip>
    </StyledToggleButtonGroup>
  );
}
