import themePalette from './palette/themePalette';
import { ThemeType } from './palette/themePalette';

const muiTheme = (mode: ThemeType) => ({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    type: mode,
    primary: themePalette(mode).palette.primary,
    secondary: themePalette(mode).palette.secondary,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        fontFamily: 'Roboto',
        color: 'var(--white)',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        height: '3rem',
        fontSize: '1.3rem',
      },
      sizeLarge: {
        height: '4.5rem',
        fontSize: '1.5rem',
      },
    },
  },
});

export default muiTheme;
