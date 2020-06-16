import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font-size: 62.5%;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--body-bg);
    color: var(--text-color);
    font-weight: var(--weight-light);
    font-family: var(--family-primary);
    font-size: var(--text-normal);
    line-height: 160%;
    -webkit-font-smoothing: antialiased;

    ${media.greaterThan('large')`
      font-size: 1.9rem;
    `}
  }
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }

  a {
    color: var(--text-color)
  }

  strong {
    font-weight: var(--weight-semibold);
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: var(--gray-dark) !important;
    border-color: var(--gray) !important;
  }

  :root {
    --white: #fff;
    --gray-extra-light: #dfdfdf;
    --gray-light: #bcbcbc;
    --gray: #707886;
    --gray-dark: #2e333e;
    --black: #1d1c21;

    --primary-color: #9046FE;
    --secondary-color: #9c5cfb;

    --width-container: 1400px;
    --width-content: 900px;

    --family-primary: 'Roboto', sans-serif;
    --family-secondary: 'Oswald', Helvetica, Arial, sans-serif;
    --family-monospace: 'Roboto Mono', monospace;

    --text-small: 1.4rem;
    --text-normal: 1.7rem;
    --text-medium: 2rem;
    --text-large: 2.5rem;
    --text-xlarge: 3.5rem;
    --text-huge: 9rem;

    --weight-light: 300;
    --weight-normal: 400;
    --weight-semibold: 500;
    --weight-bold: 600;

    --space-xs: .5rem;
    --space-sm: 1rem;
    --space: 2rem;
    --space-lg: 3rem;
    --space-xlg: 4rem;

    --radius-small: 2px;
    --radius: 4px;
    --radius-large: 6px;
    --radius-rounded: 290486px;

    /* For storybook */
    --body-bg: var(--black);
    --body-bg-rgb: 29, 28, 33;
    --body-bg-secondary: var(--gray-dark);
    --border-color: var(--gray-dark);
    --border-color-light: var(--gray);
    --text-color: var(--gray-extra-light);
    --text-color-rgb: 255,255,255;
    --text-color-light: var(--gray);
  }

  body.dark {
    --body-bg: var(--black);
    --body-bg-rgb: 29, 28, 33;
    --body-bg-secondary: var(--gray);

    --border-color: var(--gray-dark);
    --border-color-light: var(--gray);

    --text-color: var(--gray-extra-light);
    --text-color-rgb: 255,255,255;
    --text-color-light: var(--gray);
  }

  body.light {
    --body-bg: var(--white);
    --body-bg-rgb: 255, 255, 255;
    --body-bg-secondary: var(--gray-dark);

    --border-color: var(--gray-extra-light);
    --border-color-light: var(--gray);

    --text-color: var(--black);
    --text-color-rgb: 0,0,0;
    --text-color-light: var(--gray);

    --gradient-start: rgba(#ffffff, 0.9);
    --gradient-end: rgba(#ffffff, 0);
  }

  .container {
    width: 90%;
    max-width: var(--width-container);
    margin: 0 auto;
    padding: calc(var(--space) * 1.3) var(--space-lg);
    ${media.greaterThan('large')`
      width: 100%;
    `}

    &.large {
      padding: var(--space-xlg) var(--space-lg);
    }
  }

  .container-large {
    width: 100%;
    max-width: var(--width-container);
    margin: 0 auto;
    padding: var(--space-xlg) var(--space-lg);
  }

  /* .has-text-underline {
    display: inline-block;
    border-bottom: 1px solid var(--primary-color);
  } */
`;
export default GlobalStyles;
