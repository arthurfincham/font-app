export default function PreviewInput({ updatePreviewText }) {
  return (
    <tr className="w-1/2 ">
      <td></td>
      <td className="w-10/12 text-2xl">
        {
          <input
            type="text"
            name="previewText"
            className="h-12 p-2 text-2xl w-full"
            placeholder="Preview text..."
            onChange={(e) => updatePreviewText(e)}
          />
        }
      </td>
    </tr>
  );
}
