import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import './index.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f7a440',
      light: '#f8b666',
    },
    secondary: {
      main: '#6eb57d',
    },
    background: {
      default: '#F6DCBF',
    },
    text: {
      primary: '#585757',
      secondary: '#6d6b6b',
    },
    warning: {
      main: '#ff9800',
      light: '#ffac33',
    },
  },
});

export default function getTheme() :Theme {
  return theme;
}
