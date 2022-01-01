import PreviewRow from './PreviewRow';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export default function PreviewTable({ fontSize, previewText, fontWeight, codeDisplay }) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'Bodoni Moda'}
          fontName={'Bodoni'}
          previewText={previewText}
        />
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'EB Garamond'}
          fontName={'Garamond'}
          previewText={previewText}
        />
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'Old Standard TT'}
          fontName={'Old Standard'}
          previewText={previewText}
        />
        <PreviewRow codeDisplay={codeDisplay} fontWeight={fontWeight} fontSize={fontSize} font={'Jost'} fontName={'Jost'} previewText={previewText} />
        <PreviewRow
          codeDisplay={codeDisplay}
          fontWeight={fontWeight}
          fontSize={fontSize}
          font={'Inter'}
          fontName={'Inter'}
          previewText={previewText}
        />
      </Table>
    </TableContainer>
  );
}
