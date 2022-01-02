import Paper from '@mui/material/Paper';

export default function ToggleWrapper({ children }) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        padding: '.5em 1em .5em 1em',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: {
          xs: '100%',
          md: 'auto',
        },
        backgroundColor: '#EBEBEB',
      }}
    >
      {children}
    </Paper>
  );
}
