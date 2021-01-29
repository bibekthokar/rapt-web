import React, { ReactNode } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import muiTheme from './muiTheme';

interface ThemeProviderI {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderI) => {
  const theme = createMuiTheme(muiTheme('light'));
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
