import FontSlider from './FontSlider';
import PreviewInput from './PreviewInput';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar({ setTheme, setFontSize, updatePreviewText, setFontWeight, fontSize }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#D4D1FE' }}>
        <Toolbar sx={{ padding: '5vh' }}>
          <PreviewInput updatePreviewText={updatePreviewText} />
          <FontSlider setFontSize={setFontSize} fontSize={fontSize} />
          <MenuItem>
            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="outlined">
              <Button onClick={() => setFontWeight('400')}>400</Button>
              <Button onClick={() => setFontWeight('600')}>600</Button>
              <Button onClick={() => setFontWeight('800')}>800</Button>
            </ButtonGroup>
          </MenuItem>
          <MenuItem>
            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="outlined">
              <Button onClick={() => setTheme('Dark')}>Dark</Button>
              <Button onClick={() => setTheme('Light')}>Light</Button>
              <Button onClick={() => setTheme('Yellow')}>Yellow</Button>
            </ButtonGroup>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
