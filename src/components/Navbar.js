import PreviewInput from './PreviewInput';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FontWeight from './toggles/FontWeight';
import TextColor from './toggles/TextColor';
import BodyColor from './toggles/BodyColor';
import FontSize from './toggles/FontSize';
import CodeSnippet from './toggles/CodeSnippet';

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
        <FontSize fontSize={fontSize} setFontSize={setFontSize} />
        <FontWeight fontWeight={fontWeight} setFontWeight={setFontWeight} />
        <CodeSnippet codeDisplay={codeDisplay} setCodeDisplay={setCodeDisplay} />
        <BodyColor setBodyColor={setBodyColor} bodyColor={bodyColor} />
        <TextColor setTextColor={setTextColor} textColor={textColor} />
      </Paper>
    </Box>
  );
}
