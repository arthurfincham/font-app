import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { useMemo } from 'react';

export default function PreviewInput({ updatePreviewText, previewInput, previewText }) {
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (focused) {
        return 'Feel free to change the styles';
      }

      return 'Preview Text';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput
          autoFocus={true}
          value={previewText}
          ref={previewInput}
          placeholder="Please enter text"
          onChange={(e) => updatePreviewText(e)}
        />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}
