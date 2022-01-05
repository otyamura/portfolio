import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import getTheme from './Theme';
import './styles/avatar.css';

export default function Header() {
  const theme = getTheme();
  const { primary } = theme.palette;
  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight="100vh"
      sx={{
        height: 500,
        bgcolor: primary.main,
        justifyContent: 'center',
      }}
    >
      <Avatar
        alt="Otyamura"
        src={`${process.env.PUBLIC_URL || 'default'}/icon.png`}
        sx={{ width: 300, height: 300, bgcolor: 'white' }}
        className="slide-in-blurred-top"
      />
    </Box>
  );
}
