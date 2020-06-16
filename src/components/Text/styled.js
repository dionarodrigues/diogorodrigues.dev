import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const baseTitleStyles = css`
  font-size: ${props => props.size}rem;
  line-height: 140%;
  font-weight: ${props => props.fontWeight};
  font-family: ${props => props.fontFamily};

  -webkit-text-stroke: ${props =>
    props.isStroke ? `1px ${props.color}` : 'none'};
  color: ${props => (props.isStroke ? 'transparent' : `${props.color}`)};

  strong {
    font-weight: var(--weight-semibold);
  }

  ${media.greaterThan('small')`
    font-size: ${props => props.sizeSmall || props.size}rem;
    line-height: 140%;
  `}

  ${media.greaterThan('medium')`
    font-size: ${props => props.sizeMedium || props.sizeSmall || props.size}rem;
    line-height: 120%;
  `}

  ${media.greaterThan('large')`
    font-size: ${props =>
      props.sizeLarge || props.sizeMedium || props.sizeSmall || props.size}rem;
    line-height: 110%;
    letter-spacing: ${props => (props.sizeHuge > 10 ? '-3px' : 0)};
  `}

  ${media.greaterThan('huge')`
    font-size: ${props =>
      props.sizeHuge ||
      props.sizeLarge ||
      props.sizeMedium ||
      props.sizeSmall ||
      props.size}rem;
      line-height: 110%;
  `}
    letter-spacing: ${props => (props.sizeHuge > 15 ? '-4px' : 0)};
`;

export const TitleText = styled.div`
  ${baseTitleStyles}

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${baseTitleStyles}
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    position: relative;
    color: ${props => props.color};
    &: after {
      content: '';
      display: inline - block;
      width: 100 %;
      height: 1px;
      background: ${props => props.color};
      position: absolute;
      left: 0;
      bottom: 0;
      transition: 0.2s;
      opacity: 0;
    }
    &: hover {
      &: after {
        opacity: 1;
      }
    }
  }
`;
