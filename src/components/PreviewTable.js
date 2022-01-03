import PreviewRow from './PreviewRow';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { GlobalStyles } from '../global';
import { BodyColorContext } from '../context/BodyColorContext';
import { TextColorContext } from '../context/TextColorContext';
import { useState, useContext } from 'react';

export default function PreviewTable({ fontSize, previewText, fontWeight, codeDisplay, fontItalic }) {
  const htmlItalic = (font) => {
    return `<link href='https://fonts.googleapis.com/css2?family=${font}:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap' rel='stylesheet' />`;
  };

  const htmlNormal = (font) => {
    return `<link href='https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700;800&display=swap' rel='stylesheet' />`;
  };

  const { myBodyColor, setMyBodyColor } = useContext(BodyColorContext);

  const { myTextColor, setMyTextColor } = useContext(TextColorContext);

  const colorTheme = createTheme({
    body: myBodyColor,
    text: myTextColor,
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

  return (
    <ThemeProvider theme={colorTheme}>
      <GlobalStyles />
      <TableContainer>
        <Table aria-label="simple table">
          <tbody>
            <PreviewRow font={'Bodoni Moda'} fontName={'Bodoni'} htmlTag={htmlItalic} previewText={previewText} transform={null} />
            <PreviewRow font={'EB Garamond'} fontName={'Garamond'} htmlTag={htmlItalic} previewText={previewText} transform={null} />
            <PreviewRow font={'Hind'} fontName={'Hind'} htmlTag={htmlNormal} previewText={previewText} transform={'scale(1,.92)'} />

            <PreviewRow font={'Inter'} fontName={'Inter'} htmlTag={htmlNormal} previewText={previewText} transform={null} />
          </tbody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
