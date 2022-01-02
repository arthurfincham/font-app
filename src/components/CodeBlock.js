import TableCell from '@mui/material/TableCell';
import CodeSnippet from './CodeSnippet';

export default function CodeBlock({ font, fontWeight, htmlTag, transform, fontItalic }) {
  const transForm = `\ntransform: '${transform}';`;
  const italicStyle = `\nfont-style: 'italic';`;
  const cssBlock = `font-family: '${font}';\nfont-weight: '${fontWeight}';${transform ? transForm : ''}${fontItalic ? italicStyle : ''}`;
  const finalHTMLTag = htmlTag(font.replace(/\s/g, '+'));
  const entireHTMLTag =
    `<link rel='preconnect' href='https://fonts.googleapis.com' />
<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />` + finalHTMLTag;

  return (
    <TableCell align="right" sx={{ width: '400px' }}>
      <CodeSnippet language="HTML" preview={finalHTMLTag} content={entireHTMLTag} />
      <CodeSnippet language="CSS" preview={cssBlock} content={cssBlock} />
    </TableCell>
  );
}
