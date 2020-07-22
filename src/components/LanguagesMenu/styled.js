import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const LanguageWrapper = styled.ul`
  display: flex;
`;

export const LanguageItem = styled.li`
  margin-left: var(--space-sm);
`;

export const LanguageLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 1.4rem;
  text-decoration: none;
  &.is-active {
    font-weight: bold;
  }
`;
