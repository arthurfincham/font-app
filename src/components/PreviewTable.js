import PreviewRow from './PreviewRow';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export default function PreviewTable({ fontSize, previewText, fontWeight, codeDisplay, fontItalic }) {
  const htmlItalic = (font) => {
    return `<link href='https://fonts.googleapis.com/css2?family=${font}:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap' rel='stylesheet' />`;
  };

  const htmlNormal = (font) => {
    return `<link href='https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700;800&display=swap' rel='stylesheet' />`;
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
          htmlTag={htmlItalic}
          fontItalic={fontItalic}
          previewText={previewText}
          transform={null}
        />
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'EB Garamond'}
          fontName={'Garamond'}
          htmlTag={htmlItalic}
          fontItalic={fontItalic}
          previewText={previewText}
          transform={null}
        />
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'Hind'}
          fontName={'Hind'}
          htmlTag={htmlNormal}
          previewText={previewText}
          transform={'scale(1,.92)'}
        />

        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'Inter'}
          fontName={'Inter'}
          htmlTag={htmlNormal}
          previewText={previewText}
          transform={null}
        />
      </Table>
    </TableContainer>
  );
}
