import PreviewInput from './PreviewInput';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FontWeight from './toggles/FontWeight';
import FontSize from './toggles/FontSize';
import Dropdown from './toggles/Dropdown';
import Single from './toggles/Single';

import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

import CodeIcon from '@mui/icons-material/Code';

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
          maxWidth: '100%',
          alignItems: 'center',
          backgroundColor: '#EBEBEB',
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
            },
            backgroundColor: '#EBEBEB',
          }}
        >
          <FontSize fontSize={fontSize} setFontSize={setFontSize} />
          <FontWeight fontWeight={fontWeight} setFontWeight={setFontWeight} />
          <Single state={fontItalic} setState={setFontItalic} title="Italic" icon={<FormatItalicIcon size="1.5em" />} />
          <Single state={codeDisplay} setState={setCodeDisplay} title="Code Snippets" icon={<CodeIcon size="1.5em" />} />
          <Dropdown setState={setBodyColor} state={bodyColor} icon={<FormatColorFillIcon htmlColor={bodyColor} />} />
          <Dropdown setState={setTextColor} state={textColor} icon={<FormatColorTextIcon htmlColor={textColor} />} />
        </Paper>
      </Paper>
    </Box>
  );
}
