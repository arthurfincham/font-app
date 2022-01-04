import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CodeSnippet({ language, preview, content }) {
  const [copied, setCopied] = useState(false);

  return (
    <CopyToClipboard text={content}>
      <Tooltip title={copied ? 'Copied!' : language} placement="left">
        <div>
          <SyntaxHighlighter language={language} wrapLongLines={true} onClick={() => setCopied(true)}>
            {preview}
          </SyntaxHighlighter>
        </div>
      </Tooltip>
    </CopyToClipboard>
  );
}
