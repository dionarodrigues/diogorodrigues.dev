/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  &:hover {
    h2 {
      color: var(--primary-color);
      transition: 0.2s;
    }

    & > div:first-child {
      box-shadow: 0 0 10px rgba(144,70,254,.5);
      transition: 0.2s;
    }
  }
`;

export const Media = styled.div`
`;

export const Content = styled.div`
`;

export const Title = styled.h2`
  margin: var(--space) 0 var(--space-sm);
`;
export const Description = styled.p`
  font-size: var(--text-normal);
`;

export const Category = styled.p`
  font-size: var(--text-small);
  color: var(--text-color-light);
`;
