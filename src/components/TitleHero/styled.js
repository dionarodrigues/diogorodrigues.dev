import styled from 'styled-components';
import media from 'styled-media-query';

export const Title = styled.h1`
  font-size: ${props => props.size || '4'}rem;
  line-height: 160%;
  font-weight: 600;
  font-family: var(--family-secondary);
  font-style: normal;
  text-transform: uppercase;
  color: var(--body-color);
  position: relative;
  letter-spacing: 5px;
  ${media.greaterThan('small')`
    font-size: ${props => props.size * 1.3 || 4 * 1.3}rem;
    letter-spacing: 7px;
    line-height: 160%;
  `}
  ${media.greaterThan('medium')`
    font-size: ${props => props.size * 2.2 || 4 * 2.2}rem;
    letter-spacing: 11px;
    line-height: 140%;
  `}
  ${media.greaterThan('large')`
    font-size: ${props => props.size * 3.5 || 4 * 3.5}rem;
    letter-spacing: 15px;
    line-height: 140%;
  `}

  .text-highlight {
    background: var(--text-color);
    padding: 5px 20px;
    color: var(--body-bg);
  }
`;
