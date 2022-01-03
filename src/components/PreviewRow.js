import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import CodeBlock from './CodeBlock';
import { SizeContext } from '../context/SizeContext';
import { useContext } from 'react';

export default function PreviewRow({ font, transform, fontName, previewText, fontWeight, codeDisplay, htmlTag, fontItalic }) {
  const { myFontSize, setMyFontSize } = useContext(SizeContext);
  const italicFont = fontItalic ? 'italic' : 'normal';
  const styling = {
    fontFamily: font,
    fontSize: `${myFontSize}em`,
    fontWeight: fontWeight,
    whiteSpace: 'nowrap',
    transform: transform,
    fontStyle: italicFont,
  };

  const fontInfo = (
    <td>
      <div className="fontRowInfo">
        <Typography>{fontName}</Typography>
        <Typography>{fontWeight}</Typography>
      </div>
    </td>
  );

  return (
    <TableRow sx={{ position: 'relative' }}>
      <TableCell sx={{ width: 'auto', paddingInline: 6 }} style={styling}>
        {previewText[0] === null || previewText.length === 0 ? fontName : previewText}
      </TableCell>
      {codeDisplay ? <CodeBlock font={font} fontWeight={fontWeight} htmlTag={htmlTag} transform={transform} fontItalic={fontItalic} /> : null}
      {codeDisplay ? null : fontInfo}
    </TableRow>
  );
}
