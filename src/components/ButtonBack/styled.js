import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

export const Icon = styled.span`
  margin-right: var(--space);
`;
