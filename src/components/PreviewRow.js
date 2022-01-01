import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import CodeBlock from './CodeBlock';

export default function PreviewRow({ font, fontName, previewText, fontWeight, fontSize, codeDisplay }) {
  const styling = {
    fontFamily: font,
    fontSize: `${fontSize}em`,
    fontWeight: fontWeight,
    whiteSpace: 'nowrap',
  };

  const fontInfo = (
    <div className="fontRowInfo">
      <Typography>{fontName}</Typography>
      <Typography>{fontWeight}</Typography>
    </div>
  );

  return (
    <TableRow sx={{ position: 'relative' }}>
      <TableCell sx={{ width: 'auto', paddingInline: 6 }} style={styling}>
        {previewText[0] === null || previewText.length === 0 ? fontName : previewText}
      </TableCell>
      {codeDisplay ? <CodeBlock fontName={fontName} fontWeight={fontWeight} /> : null}
      {codeDisplay ? null : fontInfo}
    </TableRow>
  );
}
