import NavButton from './NavButton';
import NavButtonContent from './NavButtonContent';
import ContentToggle from './ContentToggle';
import FontSlider from './FontSlider';
import PreviewInput from './PreviewInput';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Navbar({ setTheme, setFontSize, updatePreviewText, setFontWeight, fontSize }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <PreviewInput updatePreviewText={updatePreviewText} />

          <NavButton name="Size">
            <NavButtonContent>
              <FontSlider setFontSize={setFontSize} fontSize={fontSize} />
            </NavButtonContent>
          </NavButton>
          <NavButton name="Weight">
            <NavButtonContent>
              <ContentToggle name="400" bgColor="white" fontColor="black" stateToggle={setFontWeight} />
              <ContentToggle name="600" bgColor="white" fontColor="black" stateToggle={setFontWeight} />
              <ContentToggle name="800" bgColor="white" fontColor="black" stateToggle={setFontWeight} />
            </NavButtonContent>
          </NavButton>
          <NavButton name="Themes" id="themeToggleButton">
            <NavButtonContent>
              <ContentToggle name="Dark" bgColor="#222223" fontColor="white" stateToggle={setTheme} />
              <ContentToggle name="Light" bgColor="white" fontColor="black" stateToggle={setTheme} />
              <ContentToggle name="Yellow" bgColor="#FEF3C7" fontColor="#372FA3" stateToggle={setTheme} />
            </NavButtonContent>
          </NavButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
