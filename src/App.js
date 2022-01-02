import { useState, useRef, useEffect } from 'react';
import PreviewTable from './components/PreviewTable';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from './global';

function App() {
  const [previewText, setPreviewText] = useState([null]);

  const previewInput = useRef(null);

  const [fontSize, setFontSize] = useState('2');

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
    setFontSize,
    fontSize,
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
    console.log(previewText.length);
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
      <Navbar {...navProps} />
      <main>
        <ThemeProvider theme={colorTheme}>
          <GlobalStyles />
          <PreviewTable
            fontSize={fontSize}
            fontItalic={fontItalic}
            codeDisplay={codeDisplay}
            previewText={previewText}
            fontWeight={fontWeight}
            sx={{ height: '100%' }}
          />
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
