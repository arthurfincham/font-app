import PreviewInput from './PreviewInput';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FontWeight from './toggles/FontWeight';
import TextColor from './toggles/TextColor';
import BodyColor from './toggles/BodyColor';
import FontSize from './toggles/FontSize';
import FontItalic from './toggles/FontItalic';
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
  fontItalic,
  setFontItalic,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          height: {
            xs: '120px',
            md: '70px',
          },
          padding: '.5em 1em .5em 1em',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <PreviewInput updatePreviewText={updatePreviewText} previewInput={previewInput} previewText={previewText} />
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            padding: '.5em 1em .5em 1em',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: {
              xs: '100%',
              md: 'auto',
              lg: '40%',
            },
          }}
        >
          <FontSize fontSize={fontSize} setFontSize={setFontSize} />
          <FontWeight fontWeight={fontWeight} setFontWeight={setFontWeight} />
          <FontItalic fontItalic={fontItalic} setFontItalic={setFontItalic} />
          <CodeSnippet codeDisplay={codeDisplay} setCodeDisplay={setCodeDisplay} />
          <BodyColor setBodyColor={setBodyColor} bodyColor={bodyColor} />
          <TextColor setTextColor={setTextColor} textColor={textColor} />
        </Paper>
      </Paper>
    </Box>
  );
}
