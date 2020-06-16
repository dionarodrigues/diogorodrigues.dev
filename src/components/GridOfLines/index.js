import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const GridOfLines = ({ width, height, backgroundSize, opacity }) => {
  return (
    <S.Wrapper
      width={width}
      height={height}
      backgroundSize={backgroundSize}
      opacity={opacity}
    />
  );
};

GridOfLines.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundSize: PropTypes.string,
  opacity: PropTypes.number,
};

GridOfLines.defaultProps = {
  width: '100%',
  height: '150px',
  backgroundSize: '60px',
  opacity: 1,
};

export default GridOfLines;
