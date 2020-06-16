import styled from 'styled-components';
import media from 'styled-media-query';

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  position: relative;

  .container-large {
    position: relative;
    z-index: 1;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
`;

export const Breadcrumb = styled.div`
  margin-bottom: var(--space);
`;

export const Header = styled.div``;

export const Title = styled.div`
  margin-bottom: 0;
  text-align: center;
`;

export const Info = styled.section`
  margin-top: var(--space-xlg);
  ${media.greaterThan('small')`
    margin-top: var(--space-xlg);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: var(--space-lg);
  `}
  ${media.greaterThan('large')`
    margin-top: calc(var(--space-lg)*2);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `}
`;

export const InfoItem = styled.div`
  & + & {
    margin-top: var(--space-lg);
    ${media.greaterThan('small')`
      margin-top: 0;
    `}
  }
  h2 {
    font-family: var(--family-secondary);
  }
`;
