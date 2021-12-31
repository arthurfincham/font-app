import FontSlider from './FontSlider';
import PreviewInput from './PreviewInput';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export default function Navbar({ setTheme, previewInput, previewText, setFontSize, updatePreviewText, setFontWeight, fontSize }) {
  const StyledGridItem = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const StyledPortrait = styled(Box)({
    backgroundColor: 'white',
    padding: '12px 12px 12px 12px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
  });

  const StyledLandscape = styled(Box)({
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ padding: 3, backgroundColor: '#E6EBF0' }}>
        <StyledGridItem item={true} xs={4}>
          <StyledLandscape>
            <PreviewInput updatePreviewText={updatePreviewText} previewInput={previewInput} previewText={previewText} />
          </StyledLandscape>
        </StyledGridItem>
        <StyledGridItem item xs={4}>
          <StyledLandscape>
            <FontSlider setFontSize={setFontSize} fontSize={fontSize} />
          </StyledLandscape>
        </StyledGridItem>
        <StyledGridItem item xs={2}>
          <StyledPortrait>
            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="outlined">
              <Button onClick={() => setFontWeight('400')}>400</Button>
              <Button onClick={() => setFontWeight(600)}>600</Button>
              <Button onClick={() => setFontWeight('800')}>800</Button>
            </ButtonGroup>
          </StyledPortrait>
        </StyledGridItem>

        <StyledGridItem item xs={2}>
          <StyledPortrait>
            <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="outlined">
              <Button onClick={() => setTheme('Dark')}>Dark</Button>
              <Button onClick={() => setTheme('Light')}>Light</Button>
              <Button onClick={() => setTheme('Yellow')}>Yellow</Button>
            </ButtonGroup>
          </StyledPortrait>
        </StyledGridItem>
      </Grid>
    </Box>
  );
}
