import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr);
  `}

  & > div {
    filter: invert(0.5);
  }
`;

export const Title = styled.h2`
  margin-bottom: var(--space);
  color: var(--text-color-light);
`;
