/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const Media = styled.div`
`;

export const Content = styled.div`
`;

export const Title = styled.div`
  margin: var(--space) 0 var(--space-sm);
`;
export const Description = styled.p`
  font-size: var(--text-normal);
`;

export const Category = styled.p`
  font-size: var(--text-small);
  color: var(--text-color-light);
`;
