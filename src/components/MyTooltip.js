import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/system';

export default function MyTooltip({ title, subTitle, children }) {
  const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 120,
      textAlign: 'center',
      fontSize: '.8em',
      backgroundColor: '#EBEBEB',
      color: '#000',
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },
  });

  const tooltipInfo = (
    <Box>
      <Typography variant="caption" sx={{ fontSize: '1em' }}>
        {title}
      </Typography>
      <br></br>
      <Typography variant="caption" sx={{ fontSize: '.8em', lineHeight: '.7em' }}>
        {subTitle}
      </Typography>
    </Box>
  );

  return (
    <CustomTooltip title={tooltipInfo} enterDelay={800} enterNextDelay={400}>
      {children}
    </CustomTooltip>
  );
}
