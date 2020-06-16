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
      rgba(var(--body-bg-rgb), 1),
      rgba(var(--body-bg-rgb), 0.5)
    );
  }

  .container-large {
    position: relative;
    z-index: 1;
  }
`;

export const Breadcrumb = styled.div`
  margin-bottom: var(--space);
`;

export const Info = styled.div`
  margin-bottom: var(--space);
  margin-top: var(--space);
  color: var(--text-color-light);
  text-align: center;
  ${media.lessThan('medium')`
    font-size: var(--text-small);
  `}
`;

export const Title = styled.div`
  margin-bottom: var(--space-lg);
  text-align: center;
`;

export const Description = styled.div`
  font-size: var(--text-normal);
  line-height: 160%;
  text-align: center;
  ${media.greaterThan('medium')`
    font-size: var(--text-medium);
  `}
  ${media.greaterThan('large')`
    font-size: var(--text-large);
  `}
`;
