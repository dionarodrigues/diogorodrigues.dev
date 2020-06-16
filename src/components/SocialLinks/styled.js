import styled from 'styled-components';

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SocialLinksItem = styled.li`
  display: block;
  margin-right: 1rem;
`;

export const SocialLinksLink = styled.a`
  display: block;
  width: 50px;
  color: var(--text-color-light);
  transition: 0.3s;
  &:hover {
    color: var(--text-color);
  }
`;
