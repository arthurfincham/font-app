import PreviewRow from './PreviewRow';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { render } from '@testing-library/react';

export default function PreviewTable({ fontSize, previewText, fontWeight, codeDisplay }) {
  const htmlBodoni = (font) => {
    return `<link href='https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700&display=swap' rel='stylesheet' />`;
  };

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'Bodoni Moda'}
          fontName={'Bodoni'}
          htmlTag={htmlBodoni}
          previewText={previewText}
          transform={null}
        />
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'EB Garamond'}
          fontName={'Garamond'}
          htmlTag={htmlBodoni}
          previewText={previewText}
          transform={null}
        />
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'Hind'}
          fontName={'Hind'}
          htmlTag={htmlBodoni}
          previewText={previewText}
          transform={'scale(1,.92)'}
        />

        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'Inter'}
          fontName={'Inter'}
          htmlTag={htmlBodoni}
          previewText={previewText}
          transform={null}
        />
      </Table>
    </TableContainer>
  );
}
