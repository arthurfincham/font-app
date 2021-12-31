import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

export default function PreviewRow({ font, fontName, previewText, fontWeight, fontSize }) {
  const styling = {
    fontFamily: font,
    fontSize: `${fontSize}em`,
    fontWeight: fontWeight,
    whiteSpace: 'nowrap',
  };
  return (
    <TableRow sx={{ position: 'relative' }}>
      <TableCell sx={{ width: '85%', paddingInline: 6 }} style={styling}>
        {previewText[0] === null || previewText.length === 0 ? fontName : previewText}
      </TableCell>
      <TableCell></TableCell>
      <div className="fontRowInfo">
        <Typography>{fontName}</Typography>
        <Typography>{fontWeight}</Typography>
      </div>
    </TableRow>
  );
}
