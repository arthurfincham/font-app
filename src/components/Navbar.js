import PreviewInput from './PreviewInput';
import NavWrapper from './wrappers/NavWrapper';
import ToggleWrapper from './wrappers/ToggleWrapper';
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
  updatePreviewText,
  setFontWeight,
  fontWeight,
  codeDisplay,
  setCodeDisplay,
  fontItalic,
  setFontItalic,
}) {
  return (
    <NavWrapper>
      <PreviewInput updatePreviewText={updatePreviewText} previewInput={previewInput} previewText={previewText} />
      <ToggleWrapper>
        <FontSize />
        <FontWeight fontWeight={fontWeight} setFontWeight={setFontWeight} />
        <Single state={fontItalic} setState={setFontItalic} title="Italic" icon={<FormatItalicIcon size="1.5em" />} />
        <Single state={codeDisplay} setState={setCodeDisplay} title="Code Snippets" icon={<CodeIcon size="1.5em" />} />
        <Dropdown state={bodyColor} setState={setBodyColor} icon={<FormatColorFillIcon htmlColor={bodyColor} />} />
        <Dropdown state={textColor} setState={setTextColor} icon={<FormatColorTextIcon htmlColor={textColor} />} />
      </ToggleWrapper>
    </NavWrapper>
  );
}
