import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ButtonToggleTheme = ({ isDarkMode, handleClick }) => {
  return (
    <S.Button onClick={handleClick}>
      {isDarkMode ? <S.IconSun /> : <S.IconMoon />}
    </S.Button>
  );
};

ButtonToggleTheme.propTypes = {
  isDarkMode: PropTypes.bool,
  handleClick: PropTypes.func,
};

ButtonToggleTheme.defaultProps = {
  isDarkMode: false,
  handleClick: () => console.log('Button Toggle Theme Clicked'),
};

export default ButtonToggleTheme;
