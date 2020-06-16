import React from 'react';
import PropTypes from 'prop-types';
import ArrowStroke from '../ArrowStroke';

import * as S from './styled';

const CircleTextRotation = ({ text, letterSpacing, hasArrow }) => {
  return (
    <S.Wrapper>
      <S.Circle>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 244.1 244.1"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve"
        >
          <path
            id="circlePath"
            d="M226.6,122.1c0,57.7-46.8,104.5-104.5,104.5S17.6,179.8,17.6,122.1S64.4,17.6,122.1,17.6
              S226.6,64.4,226.6,122.1z"
            fill="transparent"
          />
          <text>
            <textPath xlinkHref="#circlePath" letterSpacing={letterSpacing}>
              {text}
            </textPath>
          </text>
        </svg>
      </S.Circle>
      {hasArrow && (
        <S.Icon>
          <ArrowStroke direction="right" size={45} />
        </S.Icon>
      )}
    </S.Wrapper>
  );
};

CircleTextRotation.propTypes = {
  text: PropTypes.string.isRequired,
  letterSpacing: PropTypes.number,
  hasArrow: PropTypes.bool,
};

CircleTextRotation.defaultProps = {
  letterSpacing: 0,
  hasArrow: false,
};

export default CircleTextRotation;
