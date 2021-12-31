import { useState, useRef, useEffect } from 'react';
import PreviewTable from './components/PreviewTable';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, yellowTheme } from './themes';
import { GlobalStyles } from './global';

function App() {
  const [theme, setTheme] = useState('Light');

  const [previewText, setPreviewText] = useState(['']);

  const previewInput = useRef(null);

  const [fontSize, setFontSize] = useState(1.5);

  const [fontWeight, setFontWeight] = useState('400');

  const updatePreviewText = (e) => {
    setPreviewText(e.target.value);
  };

  const themePicker = (theme) => {
    if (theme === 'Light') {
      return lightTheme;
    }
    if (theme === 'Dark') {
      return darkTheme;
    }
    if (theme === 'Yellow') {
      return yellowTheme;
    }
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
      <Navbar
        setTheme={setTheme}
        setFontSize={setFontSize}
        updatePreviewText={updatePreviewText}
        setFontWeight={setFontWeight}
        fontSize={fontSize}
        previewInput={previewInput}
        previewText={previewText}
      />
      <main>
        <ThemeProvider theme={themePicker(theme)}>
          <GlobalStyles />
          <PreviewTable fontSize={fontSize} previewText={previewText} fontWeight={fontWeight} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
