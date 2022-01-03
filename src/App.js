import { useState, useRef, useEffect } from 'react';
import PreviewTable from './components/PreviewTable';
import Navbar from './components/Navbar';
import AppContextProvider from './context/AppContextProvider';

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
    <AppContextProvider>
      <Navbar {...navProps} />
      <main>
        <PreviewTable previewText={previewText} sx={{ height: '100%' }} />
      </main>
    </AppContextProvider>
  );
}

export default App;
