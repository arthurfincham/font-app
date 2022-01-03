import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import CodeBlock from './CodeBlock';
import { SizeContext } from '../context/SizeContext';
import { WeightContext } from '../context/WeightContext';
import { ItalicContext } from '../context/ItalicContext';
import { CodeSnippetContext } from '../context/CodeSnippetContext';
import { useContext } from 'react';

export default function PreviewRow({ font, transform, fontName, previewText, codeDisplay, htmlTag }) {
  const { myFontSize, setMyFontSize } = useContext(SizeContext);
  const { myFontWeight, setMyFontWeight } = useContext(WeightContext);
  const { myFontItalic, setMyFontItalic } = useContext(ItalicContext);
  const { myCodeSnippet, setMyCodeSnippet } = useContext(CodeSnippetContext);

  const italicFont = myFontItalic ? 'italic' : 'normal';
  const styling = {
    fontFamily: font,
    fontSize: `${myFontSize}em`,
    fontWeight: myFontWeight,
    whiteSpace: 'nowrap',
    transform: transform,
    fontStyle: italicFont,
  };

  const fontInfo = (
    <td>
      <div className="fontRowInfo">
        <Typography>{fontName}</Typography>
        <Typography>{myFontWeight}</Typography>
      </div>
    </td>
  );

  return (
    <TableRow sx={{ position: 'relative' }}>
      <TableCell sx={{ width: 'auto', paddingInline: 6 }} style={styling}>
        {previewText[0] === null || previewText.length === 0 ? fontName : previewText}
      </TableCell>
      {myCodeSnippet ? <CodeBlock font={font} fontWeight={myFontWeight} htmlTag={htmlTag} transform={transform} fontItalic={myFontItalic} /> : null}
      {myCodeSnippet ? null : fontInfo}
    </TableRow>
  );
}
