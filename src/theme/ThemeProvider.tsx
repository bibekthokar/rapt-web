import React, { ReactNode } from 'react';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core';
import muiTheme from './muiTheme';

interface ThemeProviderI {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderI) => {
  const theme: Theme = createMuiTheme(muiTheme('light') as any);
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
