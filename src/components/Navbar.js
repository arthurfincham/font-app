import PreviewInput from './PreviewInput';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FontWeightToggle from './FontWeightToggle';
import ThemeToggle from './ThemeToggle';
import FontSizeToggle from './FontSizeToggle';
import CodeToggle from './CodeToggle';

export default function Navbar({
  setBodyColor,
  bodyColor,
  setTextColor,
  textColor,
  previewInput,
  previewText,
  setFontSize,
  updatePreviewText,
  setFontWeight,
  fontWeight,
  fontSize,
  codeDisplay,
  setCodeDisplay,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          padding: '.5em 1em .5em 1em',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
        <PreviewInput updatePreviewText={updatePreviewText} previewInput={previewInput} previewText={previewText} />
        <FontSizeToggle fontSize={fontSize} setFontSize={setFontSize} />
        <FontWeightToggle fontWeight={fontWeight} setFontWeight={setFontWeight} />
        <CodeToggle codeDisplay={codeDisplay} setCodeDisplay={setCodeDisplay} />
        <ThemeToggle setBodyColor={setBodyColor} bodyColor={bodyColor} setTextColor={setTextColor} textColor={textColor} />
      </Paper>
    </Box>
  );
}
