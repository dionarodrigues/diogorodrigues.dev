import styled from 'styled-components';
import { Moon } from 'styled-icons/boxicons-regular/Moon';
import { Sun } from 'styled-icons/boxicons-regular/Sun';

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color-light);
  &:focus {
    outline: none;
  }
`;

export const IconMoon = styled(Moon)`
  display: inline-block;
  width: 20px;
  color: var(--text-color-light);
`;

export const IconSun = styled(Sun)`
  display: inline-block;
  width: 23px;
  color: var(--text-color-light);
`;
