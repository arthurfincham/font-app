export default function PreviewInput({ updatePreviewText }) {
  return (
    <input
      type="text"
      name="previewText"
      className="h-12 border-4 border-black rounded-lg focus:outline-none text-lg p-2  w-1/2"
      placeholder="Preview text..."
      onChange={(e) => updatePreviewText(e)}
    />
  );
}
