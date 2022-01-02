import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { grayscale } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CodeSnippet({ language, preview, content }) {
  const [copied, setCopied] = useState(false);

  return (
    <CopyToClipboard text={content}>
      <Tooltip title={copied ? 'Copied!' : language} placement="left">
        <>
          <SyntaxHighlighter language={language} style={grayscale} wrapLongLines={true} onClick={() => setCopied(true)}>
            {preview}
          </SyntaxHighlighter>
        </>
      </Tooltip>
    </CopyToClipboard>
  );
}
