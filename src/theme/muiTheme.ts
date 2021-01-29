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
});

export default muiTheme;
