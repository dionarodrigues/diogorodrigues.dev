import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from './theme';
import { LocaleProvider } from './locale';
import { MenuProvider } from './menu';

const AppProvider = ({ children }) => (
  <ThemeProvider>
    <LocaleProvider>
      <MenuProvider>{children}</MenuProvider>
    </LocaleProvider>
  </ThemeProvider>
);

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
