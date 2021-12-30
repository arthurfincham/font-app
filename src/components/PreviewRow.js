export default function PreviewRow({ font, fontName, previewText }) {
  const styling = {
    fontFamily: font,
  };
  return (
    <tr style={styling}>
      <td className="p-2 text-2xl fontName">{fontName}</td>
      <td className="p-2 text-2xl h-24 w-10/12">{previewText}</td>
    </tr>
  );
}
