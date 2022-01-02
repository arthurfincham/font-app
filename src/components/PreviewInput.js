import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function PreviewInput({ updatePreviewText, previewInput, previewText }) {
  return (
    <FormControl sx={{ width: { lg: '30%', md: '40%', xs: '100%' }, display: 'flex', justifyContent: 'center' }}>
      <OutlinedInput
        value={previewText}
        ref={previewInput}
        placeholder="Please enter text"
        sx={{ height: '50px' }}
        onChange={(e) => updatePreviewText(e)}
      />
    </FormControl>
  );
}
