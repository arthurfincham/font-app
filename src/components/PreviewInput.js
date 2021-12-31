import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { useMemo } from 'react';

export default function PreviewInput({ updatePreviewText }) {
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (focused) {
        return 'This field is being focused';
      }

      return 'Helper text';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" onChange={(e) => updatePreviewText(e)} />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}
