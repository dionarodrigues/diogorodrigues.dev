import React from 'react';
import PropTypes from 'prop-types';
import ArrowStroke from '../ArrowStroke';

import * as S from './styled';

const ButtonBack = ({ text, link }) => {
  return (
    <S.Button to={link}>
      <S.Icon>
        <ArrowStroke direction="left" size={20} />
      </S.Icon>
      {text && text}
    </S.Button>
  );
};

ButtonBack.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ButtonBack.defaultProps = {
  text: '',
};

export default ButtonBack;
