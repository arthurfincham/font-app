import { useState } from 'react';
import PreviewRow from './PreviewRow';
import PreviewInput from './PreviewInput';

export default function PreviewTable({ fontSize, previewText, fontWeight }) {
  const styling = {
    fontSize: `${fontSize}em`,
    fontWeight: fontWeight,
  };

  return (
    <table style={styling} className="h-full w-11/12 my-6">
      <PreviewRow font={'Bodoni Moda'} fontName={'Bodoni'} previewText={previewText} />
      <PreviewRow font={'EB Garamond'} fontName={'Garamond'} previewText={previewText} />
      <PreviewRow font={'Old Standard TT'} fontName={'Old Standard'} previewText={previewText} />
      <PreviewRow font={'Jost'} fontName={'Jost'} previewText={previewText} />
      <PreviewRow font={'Inter'} fontName={'Inter'} previewText={previewText} />
    </table>
  );
}
