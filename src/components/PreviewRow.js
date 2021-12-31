import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function PreviewRow({ font, fontName, previewText }) {
  const styling = {
    fontFamily: font,
  };
  return (
    <TableRow>
      <TableCell style={styling} align="center">
        {fontName}
      </TableCell>
      <TableCell sx={{ width: '85%' }} style={styling}>
        {previewText}
      </TableCell>
    </TableRow>
  );
}
