import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@emotion/react';
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
        src="/icon.PNG"
        sx={{ width: 300, height: 300, bgcolor: 'white' }}
        className="slide-in-blurred-top"
      />
    </Box>
  );
}
