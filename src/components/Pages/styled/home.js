import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

export const Banner = styled.section``;

export const Title = styled.div`
  opacity: 0.2;
  margin-bottom: calc(var(--space-xlg) * 2);
`;

export const PortfolioSection = styled.div`
  .container {
  }
`;

export const Projects = styled.div`
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

export const Brands = styled.div`
  margin: calc(var(--space-xlg) * 2) auto var(--space);
  text-align: center;
  ${media.greaterThan('small')`
    max-width: 80%;
  `}
  ${media.greaterThan('medium')`
    width: 80%;
  `}
`;

export const ButtonMore = styled.div`
  display: flex;
  justify-content: center;
  ${media.greaterThan('medium')`
    justify-content: flex-end;
    padding-right: 200px;
  `}
`;

export const ArticlesSection = styled.div``;
