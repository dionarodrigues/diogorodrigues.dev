import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const ArrowStroke = ({ direction, size, color }) => {
  return (
    <S.Arrow direction={direction} size={size} color={color}>
      <svg viewBox="0 0 125.2 145.1">
        <path
          d="M112,68.9l-40,40.2V0.3H53.2v108.8l-40-40.2L0,82.2l62.6,62.9l62.6-62.9L112,68.9z M55.2,113.9V2.3H70v111.6
          l42-42.2l10.5,10.5l-59.8,60.1L2.8,82.2l10.5-10.5L55.2,113.9z"
          fill={color}
        />
      </svg>
    </S.Arrow>
  );
};

ArrowStroke.propTypes = {
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left', '45']),
  size: PropTypes.number,
  color: PropTypes.string,
};

ArrowStroke.defaultProps = {
  direction: 'bottom',
  size: 100,
  color: 'var(--text-color)',
};

export default ArrowStroke;
