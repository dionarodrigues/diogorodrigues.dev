import styled from 'styled-components';
import media from 'styled-media-query';

export const SiteContent = styled.section`
  /* display: flex;
  flex: 1;
  width: 100%; */
`;

export const Footer = styled.div`
  /* margin-top: 100px;
  ${media.greaterThan('large')`
    margin-top: 200px;
  `} */
`;

export const MenuAditional = styled.div`
  position: fixed;
  bottom: var(--space-lg);
  left: var(--space-lg);
  z-index: 10;
`;
