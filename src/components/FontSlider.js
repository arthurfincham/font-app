import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';

export default function FontSlider({ setFontSize, fontSize }) {
  const marks = [
    {
      value: 0.5,
      label: 'XS',
    },
    {
      value: 1,
      label: 'S',
    },
    {
      value: 1.5,
      label: 'M',
    },
    {
      value: 2,
      label: 'L',
    },
    {
      value: 2.5,
      label: 'XL',
    },
  ];
  return (
    <Box sx={{ width: 250, marginTop: 1, marginBottom: 1 }}>
      <Slider
        onChange={(e) => setFontSize(e.target.value)}
        aria-label="Custom marks"
        defaultValue={fontSize}
        valueLabelDisplay="off"
        step={0.5}
        marks={marks}
        max={2.5}
        min={0.5}
      />
    </Box>
  );
}
