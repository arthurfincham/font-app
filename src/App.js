import { useState } from 'react';
import PreviewTable from './components/PreviewTable';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, yellowTheme } from './themes';
import { GlobalStyles } from './global';

function App() {
  const [theme, setTheme] = useState('Light');

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

  return (
    <>
      <Navbar setTheme={setTheme} />
      <main>
        <ThemeProvider theme={themePicker(theme)}>
          <div className="flex flex-col justify-center items-center py-16">
            <GlobalStyles />
            <PreviewTable />
          </div>
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
