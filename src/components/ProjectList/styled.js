import styled from 'styled-components';
import media from 'styled-media-query';

export const List = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  justify-items: center;
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}

  & > div {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    ${media.greaterThan('medium')`
      width: 85%;
    `}

    & + div {
      ${media.lessThan('medium')`
        margin-top: calc(var(--space-xlg)*2);
      `}
    }

    &:nth-child(odd) {
      ${media.greaterThan('medium')`
        justify-self: start;
      `}
    }

    &:nth-child(even) {
      ${media.greaterThan('medium')`
        margin-top: calc(var(--space-xlg)*5);
        justify-self: end;
      `}
    }
  }
`;

export const Item = styled.div`
  justify-content: flex-end;
  display: flex;

  &:nth-child(even) {
    justify-content: flex-start;
  }

  & > div {
    max-width: 700px;
  }
`;
