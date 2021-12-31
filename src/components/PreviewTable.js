import PreviewRow from './PreviewRow';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export default function PreviewTable({ fontSize, previewText, fontWeight }) {
  const styling = {
    fontSize: `${fontSize}em`,
    fontWeight: fontWeight,
    minWidth: 650,
  };

  return (
    <TableContainer>
      <Table style={styling} aria-label="simple table">
        <PreviewRow font={'Bodoni Moda'} fontName={'Bodoni'} previewText={previewText} />
        <PreviewRow font={'EB Garamond'} fontName={'Garamond'} previewText={previewText} />
        <PreviewRow font={'Old Standard TT'} fontName={'Old Standard'} previewText={previewText} />
        <PreviewRow font={'Jost'} fontName={'Jost'} previewText={previewText} />
        <PreviewRow font={'Inter'} fontName={'Inter'} previewText={previewText} />
      </Table>
    </TableContainer>
  );
}
