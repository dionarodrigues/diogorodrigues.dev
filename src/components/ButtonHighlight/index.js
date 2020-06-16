import React from 'react';
import PropTypes from 'prop-types';
import ArrowStroke from '../ArrowStroke';

import * as S from './styled';

const ButtonHighlight = ({ title, size, color, link }) => {
  return (
    <S.Button to={link} size={size} color={color}>
      <S.Content>
        {title && <S.Title>{title}</S.Title>}
        <S.Icon>
          <ArrowStroke direction="right" />
        </S.Icon>
      </S.Content>
    </S.Button>
  );
};

ButtonHighlight.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ButtonHighlight.defaultProps = {
  title: undefined,
  size: 200,
  color: 'var(--primary-color)',
};

export default ButtonHighlight;
