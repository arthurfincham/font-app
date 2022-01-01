import TableCell from '@mui/material/TableCell';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { grayscale } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Tooltip from '@mui/material/Tooltip';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function CodeBlock({ font, fontWeight, htmlTag, transform }) {
  const transForm = `\ntransform: '${transform}';`;
  const cssBlock = `font-family: '${font}';\nfont-weight: '${fontWeight}';${transform ? transForm : ''}`;

  const [copiedHTML, setCopiedHTML] = useState(false);

  const [copiedCSS, setCopiedCSS] = useState(false);

  const [value, setValue] = useState(cssBlock);

  const finalHTMLTag = htmlTag(font.replace(/\s/g, '+'));

  const entireHTMLTAG =
    `<link rel='preconnect' href='https://fonts.googleapis.com' />
<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />` + finalHTMLTag;

  return (
    <TableCell align="right" sx={{ width: '400px' }}>
      <CopyToClipboard text={entireHTMLTAG}>
        <Tooltip title={copiedHTML ? 'Copied!' : 'HTML'} placement="left">
          <div>
            <SyntaxHighlighter language="javascript" style={grayscale} wrapLongLines={true} onClick={() => setCopiedHTML(true)}>
              {finalHTMLTag}
            </SyntaxHighlighter>
          </div>
        </Tooltip>
      </CopyToClipboard>

      <CopyToClipboard text={value}>
        <Tooltip title={copiedCSS ? 'Copied!' : 'CSS'} placement="left">
          <div>
            <SyntaxHighlighter language="css" style={grayscale} wrapLongLines={true} onClick={() => setCopiedCSS(true)}>
              {cssBlock}
            </SyntaxHighlighter>
          </div>
        </Tooltip>
      </CopyToClipboard>
    </TableCell>
  );
}
