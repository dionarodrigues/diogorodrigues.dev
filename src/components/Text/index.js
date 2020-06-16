import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Text = ({
  children,
  size,
  sizeSmall,
  sizeMedium,
  sizeLarge,
  sizeHuge,
  fontFamily,
  fontWeight,
  isStroke,
  color,
}) => {
  return (
    <S.TitleText
      size={size}
      sizeSmall={sizeSmall}
      sizeMedium={sizeMedium}
      sizeLarge={sizeLarge}
      sizeHuge={sizeHuge}
      isStroke={isStroke}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </S.TitleText>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  size: PropTypes.number,
  sizeSmall: PropTypes.number,
  sizeMedium: PropTypes.number,
  sizeLarge: PropTypes.number,
  sizeHuge: PropTypes.number,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  isStroke: PropTypes.bool,
  color: PropTypes.string,
};

Text.defaultProps = {
  size: 2,
  sizeSmall: null,
  sizeMedium: null,
  sizeLarge: null,
  sizeHuge: null,
  fontFamily: 'var(--family-secondary)',
  fontWeight: 'var(--weight-normal)',
  isStroke: false,
  color: 'var(--text-color)',
};

export default Text;
