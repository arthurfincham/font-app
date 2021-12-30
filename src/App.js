import { useState } from 'react';
import PreviewRow from './components/PreviewRow';
import PreviewInput from './components/PreviewInput';

function App() {
  const [previewText, setPreviewText] = useState(['']);

  const updatePreviewText = (e) => {
    setPreviewText(e.target.value);
  };

  return (
    <div className="App flex flex-col justify-center items-center w-full h-full">
      <h1>The Only Fonts You Need</h1>
      <table className="h-full w-11/12">
        <PreviewInput updatePreviewText={updatePreviewText} />
        <PreviewRow font={'Bodoni Moda'} fontName={'Bodoni'} previewText={previewText} />
        <PreviewRow font={'EB Garamond'} fontName={'Garamond'} previewText={previewText} />
        <PreviewRow font={'Old Standard TT'} fontName={'Old Standard'} previewText={previewText} />
        <PreviewRow font={'Jost'} fontName={'Jost'} previewText={previewText} />
        <PreviewRow font={'Inter'} fontName={'Inter'} previewText={previewText} />
      </table>
    </div>
  );
}

export default App;
