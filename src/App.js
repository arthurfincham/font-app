import { useState, useRef, useEffect } from 'react';
import PreviewTable from './components/PreviewTable';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from './global';
import { SizeProvider } from './context/SizeContext';
import { WeightProvider } from './context/WeightContext';
import { ItalicProvider } from './context/ItalicContext';
import { CodeSnippetProvider } from './context/CodeSnippetContext';

function App() {
  const [previewText, setPreviewText] = useState([null]);

  const previewInput = useRef(null);

  const updatePreviewText = (e) => {
    setPreviewText(e.target.value);
  };

  const [bodyColor, setBodyColor] = useState('#FFF');
  const [textColor, setTextColor] = useState('#000');

  const colorTheme = createTheme({
    body: bodyColor,
    text: textColor,
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536, // large screens
      },
    },
  });

  const navProps = {
    setBodyColor,
    bodyColor,
    setTextColor,
    textColor,
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
      <CodeSnippetProvider>
        <ItalicProvider>
          <WeightProvider>
            <SizeProvider>
              <Navbar {...navProps} />
              <main>
                <ThemeProvider theme={colorTheme}>
                  <GlobalStyles />
                  <PreviewTable previewText={previewText} sx={{ height: '100%' }} />
                </ThemeProvider>
              </main>
            </SizeProvider>
          </WeightProvider>
        </ItalicProvider>
      </CodeSnippetProvider>
    </>
  );
}

export default App;
