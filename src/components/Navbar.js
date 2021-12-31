import FontSlider from './FontSlider';
import PreviewInput from './PreviewInput';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FontWeightToggle from './FontWeightToggle';
import ThemeToggle from './ThemeToggle';
import FontSizeToggle from './FontSizeToggle';
import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';

export default function Navbar({
  setSiteTheme,
  siteTheme,
  previewInput,
  previewText,
  setFontSize,
  updatePreviewText,
  setFontWeight,
  fontWeight,
  fontSize,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
        <PreviewInput updatePreviewText={updatePreviewText} previewInput={previewInput} previewText={previewText} />
        <FontSizeToggle fontSize={fontSize} setFontSize={setFontSize} />
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <FontWeightToggle fontWeight={fontWeight} setFontWeight={setFontWeight} />
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <ThemeToggle siteTheme={siteTheme} setSiteTheme={setSiteTheme} />
      </Paper>
    </Box>
  );
}
