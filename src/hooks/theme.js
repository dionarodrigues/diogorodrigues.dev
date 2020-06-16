import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within an ThemeContext');
  }
  return context;
};

export { ThemeProvider, useTheme };
