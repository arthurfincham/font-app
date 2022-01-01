import TableCell from '@mui/material/TableCell';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function CodeBlock({ fontName, fontWeight }) {
  const cssBlock = `font-family: '${fontName}';\nfont-weight: '${fontWeight}';`;

  const [copied, setCopied] = useState(false);

  const [value, setValue] = useState(cssBlock);

  return (
    <TableCell align="right">
      <CopyToClipboard text={value} onClick={() => setCopied(true)}>
        <span className="codeBlock">
          font-family: '{fontName}'; <br></br>font-weight: '{fontWeight}';
        </span>
      </CopyToClipboard>
    </TableCell>
  );
}
