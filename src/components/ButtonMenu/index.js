import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ButtonMenu = ({ isActive, handleClick }) => {
  return (
    <S.Button onClick={handleClick} className={isActive ? 'active' : ''}>
      <span />
    </S.Button>
  );
};

ButtonMenu.propTypes = {
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
};

ButtonMenu.defaultProps = {
  isActive: false,
  handleClick: () => console.log('Button Menu Clicked'),
};

export default ButtonMenu;
