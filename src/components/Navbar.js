import PreviewInput from './PreviewInput';
import NavWrapper from './wrappers/NavWrapper';
import ToggleWrapper from './wrappers/ToggleWrapper';
import FontWeight from './toggles/FontWeight';
import FontSize from './toggles/FontSize';
import Dropdown from './toggles/Dropdown';
import CodeSnippet from './toggles/CodeSnippet';
import Italic from './toggles/Italic';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

export default function Navbar({ setBodyColor, bodyColor, setTextColor, textColor, previewInput, previewText, updatePreviewText }) {
  return (
    <NavWrapper>
      <PreviewInput updatePreviewText={updatePreviewText} previewInput={previewInput} previewText={previewText} />
      <ToggleWrapper>
        <FontSize />
        <FontWeight />
        <Italic />
        <CodeSnippet />
        <Dropdown state={bodyColor} setState={setBodyColor} icon={<FormatColorFillIcon htmlColor={bodyColor} />} />
        <Dropdown state={textColor} setState={setTextColor} icon={<FormatColorTextIcon htmlColor={textColor} />} />
      </ToggleWrapper>
    </NavWrapper>
  );
}
