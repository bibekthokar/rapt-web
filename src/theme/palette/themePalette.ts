import { darkPalette, lightPalette } from './colorPalette';

export type ThemeType = 'dark' | 'light';

const themePalette = (mode: ThemeType) => {
  if (mode === 'dark') {
    return darkPalette;
  }
  return lightPalette;
};

export default themePalette;
