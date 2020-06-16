import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  overflow: hidden;
  position: relative;
  margin-bottom: var(--space-lg);
  ${media.greaterThan('large')`
    margin-bottom: calc(var(--space-lg) * 2);
  `}
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: var(--space);
`;

export const Subtitle = styled.h2`
  display: ${props => (props.isHorizontal ? 'flex' : 'inherit')};
  justify-content: ${props => (props.isHorizontal ? 'center' : 'inherit')};
  position: relative;
  z-index: 1;

  ${media.greaterThan('medium')`
    letter-spacing: 0px;
  `}

  ${media.greaterThan('large')`
    letter-spacing: -5px;
  `}

  & > * {
    margin-bottom: -1px;
    line-height: 5.5rem;

    ${media.greaterThan('small')`
      line-height: 6rem;
      margin-bottom: 15px;
    `}

    ${media.greaterThan('medium')`
      line-height: 10rem;
    `}

    ${media.greaterThan('large')`
      line-height: 14rem;
    `}

    ${media.greaterThan('huge')`
      line-height: 20rem;
    `}
  }
`;

export const Description = styled.p`
  margin-top: var(--space);
  text-align: ${props => (props.isCentered ? 'center' : 'left')}
    ${media.greaterThan('small')`
    max-width: ${props => (props.isCentered ? '100%' : '80%')};
  `} ${media.greaterThan('medium')`
    margin-top: var(--space-lg);
    max-width: ${props => (props.isCentered ? '100%' : '70%')};
  `};
`;
