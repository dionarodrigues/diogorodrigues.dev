import styled from 'styled-components';

export const Brand = styled.div`
  position: relative;
  text-decoration: none;
  z-index: 101;
  width: 25px;
  display: flex;
  align-items: center;
`;

export const LinkTo = styled.div`
  display: inline-block;
  position: relative;
  text-decoration: none;
  z-index: 101;
  width: 25px;
  display: flex;
  align-items: center;

  img {
    width: 25px;
  }
`;

export const Title = styled.span`
  display: inline-block;
  font-family: var(--family-secondary);
  white-space: nowrap;

  ${Brand} img + & {
    margin-left: var(--space-sm);
  }
`;
