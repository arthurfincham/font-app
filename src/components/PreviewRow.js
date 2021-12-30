export default function PreviewRow({ font, fontName, previewText }) {
  const styling = {
    fontFamily: font,
  };
  return (
    <tr style={styling}>
      <td className="p-2  fontName">{fontName}</td>
      <td className="p-2   h-24 w-10/12">{previewText}</td>
    </tr>
  );
}
