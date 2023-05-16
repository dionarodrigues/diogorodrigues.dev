import { create } from '@storybook/theming/create';
import logo from '../src/images/diogo-rodrigues-logo.svg';

export default create({
  base: 'dark',

  colorPrimary: '#9046FE',
  colorSecondary: '#272626',

  // UI
  appBg: '#272626',
  appContentBg: '#2e333e',
  appBorderColor: '#555',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#fff',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#555',
  barSelectedColor: '#555',
  barBg: '#272626',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Diogo Rodrigues',
  brandUrl: 'https://www.dionarodrigues.dev/',
  brandImage: logo,
});
