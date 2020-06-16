import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.div`
  /* margin-top: -200px; */
  ${media.greaterThan('medium')`
    margin-top: 0;
  `}
  }
`;
