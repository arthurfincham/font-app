import PreviewInput from './PreviewInput';
import NavWrapper from './wrappers/NavWrapper';
import ToggleWrapper from './wrappers/ToggleWrapper';
import FontWeight from './toggles/FontWeight';
import FontSize from './toggles/FontSize';
import CodeSnippet from './toggles/CodeSnippet';
import BodyColor from './toggles/BodyColor';
import TextColor from './toggles/TextColor';
import Italic from './toggles/Italic';

export default function Navbar({ previewInput, previewText, updatePreviewText }) {
  return (
    <NavWrapper>
      <PreviewInput updatePreviewText={updatePreviewText} previewInput={previewInput} previewText={previewText} />
      <ToggleWrapper>
        <FontSize />
        <FontWeight />
        <Italic />
        <CodeSnippet />
        <BodyColor />
        <TextColor />
      </ToggleWrapper>
    </NavWrapper>
  );
}
