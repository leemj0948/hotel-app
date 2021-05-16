import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
