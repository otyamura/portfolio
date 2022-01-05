import * as React from 'react';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';

export default function BasicCard() {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        justifyContent: 'center',
      }}
    >
      <IconButton
        size="large"
        onClick={() => {
          window.location.href = 'https://github.com/otyamura';
        }}
      >
        <GitHubIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        size="large"
        onClick={() => {
          window.location.href = 'https://twitter.com/otyamura_tech';
        }}
      >
        <TwitterIcon fontSize="large" sx={{ ml: 1.5 }} />
      </IconButton>
      <IconButton
        size="large"
        onClick={() => {
          window.location.href = 'mailto:suzuki08suzuki@gmail.com';
        }}
      >
        <EmailIcon fontSize="large" sx={{ ml: 1.5 }} />
      </IconButton>
    </Box>
  );
}
