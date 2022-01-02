import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
export default function NavWrapper({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          height: {
            xs: '120px',
            md: '70px',
          },
          padding: '.5em 1em .5em 1em',
          justifyContent: 'space-between',
          maxWidth: '100%',
          alignItems: 'center',
          backgroundColor: '#EBEBEB',
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
