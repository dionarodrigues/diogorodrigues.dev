import styled from 'styled-components';
import media from 'styled-media-query';

export const Banner = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  position: relative;
  text-align: center;
  ${media.greaterThan('large')`
    text-align: left;
  `}

  /* &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      to top,
      rgba(var(--body-bg-rgb), 1),
      rgba(var(--body-bg-rgb), 0.4)
    );
  } */

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${media.greaterThan('medium')`
      padding-bottom: 100px;
      padding-top: 100px;
    `};
  }
`;

export const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h1`
  position: relative;
  line-height: 150%;
  margin-bottom: var(--space-lg);
  ${media.greaterThan('medium')`
    font-size: var(--text-large);
  `}
  ${media.greaterThan('large')`
    left: 105px;
  `}
`;

export const Highlight = styled.h2`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  white-space: nowrap;
  ${media.greaterThan('medium')`
    left: var(--space);
  `}

  div {
    &:nth-child(2) {
      position: absolute;
      top: 50%;
      left: -25px;
      transform: translateY(-50%);
      display: none;
      ${media.greaterThan('large')`
        left: -50px;
        display: block;
      `}
    }

    &:last-child {
      margin-top: -35px;
      ${media.greaterThan('large')`
        margin-top: -55px;
      `}
    }
  }
`;

export const Subtitle = styled.p`
  position: relative;

  margin-top: var(--space);
  line-height: 150%;
  ${media.greaterThan('medium')`
    margin-top: var(--space-xlg);
    line-height: 170%;
    font-size: var(--text-large);
  `}
  ${media.greaterThan('large')`
    left: 105px;
  `}
  ${media.greaterThan('huge')`
    left: 130px;
  `}
`;

export const Bio = styled.div`
  margin-top: var(--space);
  color: var(--text-color-light);
  position: relative;
  line-height: 150%;
  ${media.greaterThan('medium')`
    margin-top: var(--space-xlg);
    font-size: var(--text-large);
  `}
  ${media.greaterThan('large')`
    left: 105px;
    max-width: 350px;
  `}
  ${media.greaterThan('huge')`
    left: 130px;
  `}

  p {
    margin-bottom: var(--space);
    ${media.greaterThan('medium')`
      font-size: 2rem;
    `}
  }

  a {
    color: var(--text-color-light);
  }
`;

export const ScrollButton = styled.div`
  display: inline-flex;
  justify-content: center;
  margin-top: calc(var(--space-xlg) * 2);

  ${media.greaterThan('medium')`
    position: absolute;
    bottom: 0;
    right: 0;
  `}
`;
