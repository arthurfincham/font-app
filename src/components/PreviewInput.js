import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function PreviewInput({ updatePreviewText, previewInput, previewText }) {
  return (
    <FormControl sx={{ width: '50ch', display: 'flex', justifyContent: 'center' }}>
      <OutlinedInput
        autoFocus={true}
        value={previewText}
        ref={previewInput}
        placeholder="Please enter text"
        sx={{ height: '50px' }}
        onChange={(e) => updatePreviewText(e)}
      />
    </FormControl>
  );
}
