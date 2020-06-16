import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  /* display: flex; */
`;

export const FeaturedImage = styled.div`
  max-width: calc(var(--width-content) + 400px);
  margin: 0 auto calc(var(--space-xlg) * 1.5) auto;
  width: 70%;
  ${media.greaterThan('small')`
    width: 50%;
  `}
  ${media.greaterThan('medium')`
    width: 30%;
  `}
  ${media.greaterThan('huge')`
    width: 20%;
  `}
`;
