import { useState, useRef, useEffect } from 'react';
import PreviewTable from './components/PreviewTable';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from './global';
import { SizeProvider } from './context/SizeContext';

function App() {
  const [previewText, setPreviewText] = useState([null]);

  const previewInput = useRef(null);

  const [fontWeight, setFontWeight] = useState('600');

  const [codeDisplay, setCodeDisplay] = useState(false);

  const [fontItalic, setFontItalic] = useState(false);

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
    setFontWeight,
    fontWeight,
    setCodeDisplay,
    codeDisplay,
    setFontItalic,
    fontItalic,
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
      <SizeProvider>
        <Navbar {...navProps} />
        <main>
          <ThemeProvider theme={colorTheme}>
            <GlobalStyles />
            <PreviewTable
              fontItalic={fontItalic}
              codeDisplay={codeDisplay}
              previewText={previewText}
              fontWeight={fontWeight}
              sx={{ height: '100%' }}
            />
          </ThemeProvider>
        </main>
      </SizeProvider>
    </>
  );
}

export default App;
