import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.div`
  margin-top: -35px;
  ${media.greaterThan('large')`
    margin-top: 0;
  `}
`;

export const FeaturedImage = styled.div`
  max-width: 1500px;
  margin: 0 auto calc(var(--space-xlg) * 1.5) auto;
  position: relative;
  z-index: 0;
  margin-top: calc(var(--space-xlg) * 1.5);
  /* opacity: 0.5;

  ${media.greaterThan('large')`
    margin-top: -500px;
  `}

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      to top,
      rgba(var(--body-bg-rgb), 0),
      rgba(var(--body-bg-rgb), 0.5),
      rgba(var(--body-bg-rgb), 1)
    );
  } */
`;

export const Description = styled.section`
  position: relative;
  z-index: 2;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  ${media.greaterThan('small')`
    margin: calc(var(--space-xlg)*2) auto;
  `}
  ${media.greaterThan('large')`
    margin: calc(var(--space-xlg)*2) auto;
  `}

  h2 {
    margin: 0 0 var(--space-lg);
    -webkit-font-smoothing: antialiased;
    font-family: var(--family-primary);
    line-height: 150%;
    font-weight: var(--weight-light);
    font-size: calc(var(--text-normal) * 1.2);
    ${media.greaterThan('medium')`
      font-size: var(--text-large);
    `}
  }
`;

export const ImagesGallery = styled.div``;

export const ImagesGalleryLarge = styled.div``;

export const ImagesGalleryMedium = styled.div`
  margin-top: var(--space-xlg);
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: var(--space-lg);
    margin-top: calc(var(--space-xlg) * 2);
  `}

  & > div {
    margin-top: var(--space-xlg);
    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  }
`;

export const ImagesGallerySmall = styled.div`
  margin-top: var(--space-xlg);
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: var(--space-lg);
    margin-top: calc(var(--space-xlg) * 2);
  `}

  & > div {
    margin-top: var(--space-xlg);
    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  }
`;

export const LinkWrapper = styled.div`
  text-align: center;
  margin-top: var(--space-lg);
  a {
    display: inline-block;
    background: var(--primary-color);
    color: var(--white);
    padding: var(--space-sm) var(--space);
    text-decoration: none;
  }
`;
