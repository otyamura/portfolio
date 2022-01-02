import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import Header from './Header';
import Tab from './Tabs';
import getTheme from './Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme()}>
      <Header />
      <Tab />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
