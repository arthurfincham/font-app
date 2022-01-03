import { useState, useRef, useEffect } from 'react';
import PreviewTable from './components/PreviewTable';
import Navbar from './components/Navbar';
import { SizeProvider } from './context/SizeContext';
import { WeightProvider } from './context/WeightContext';
import { BodyColorProvider } from './context/BodyColorContext';
import { TextColorProvider } from './context/TextColorContext';
import { ItalicProvider } from './context/ItalicContext';
import { CodeSnippetProvider } from './context/CodeSnippetContext';

function App() {
  const [previewText, setPreviewText] = useState([null]);

  const previewInput = useRef(null);

  const updatePreviewText = (e) => {
    setPreviewText(e.target.value);
  };

  const navProps = {
    updatePreviewText,
    previewText,
    previewInput,
  };

  useEffect(() => {
    previewInput.current.dispatchEvent(
      new Event('change', {
        detail: {
          newValue: previewText,
        },
        bubbles: true,
        cancelable: true,
      })
    );
  }, [previewText]);

  return (
    <>
      <TextColorProvider>
        <BodyColorProvider>
          <CodeSnippetProvider>
            <ItalicProvider>
              <WeightProvider>
                <SizeProvider>
                  <Navbar {...navProps} />
                  <main>
                    <PreviewTable previewText={previewText} sx={{ height: '100%' }} />
                  </main>
                </SizeProvider>
              </WeightProvider>
            </ItalicProvider>
          </CodeSnippetProvider>
        </BodyColorProvider>
      </TextColorProvider>
    </>
  );
}

export default App;
