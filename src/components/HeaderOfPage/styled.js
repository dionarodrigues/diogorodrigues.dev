import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';
import media from 'styled-media-query';

const bounceAnimation = keyframes`${bounceInRight}`;

export const Header = styled.header`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 10;
  transition: top 0.6s;

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LanguagesMenu = styled.div`
  margin-right: var(--space);
  ${media.greaterThan('small')`
    margin-right: var(--space-xlg);
  `}
`;

export const MainMenu = styled.nav`
  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const ButtonMenu = styled.div`
  transition: 0.2s;
  &.is-active {
    position: fixed;
    z-index: 1001;
    right: 30px;
    top: 25px;
  }

  & > button {
    top: 5px;
  }
`;

export const ButtonToggleTheme = styled.div`
  margin-right: var(--space);
  ${media.greaterThan('small')`
    margin-right: var(--space-xlg);
  `}
`;

export const NavDrawer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(var(--body-bg-rgb), 0.9);
  padding: calc(var(--space-xlg) * 2);
  z-index: 1000;

  animation: 0.7s ${bounceAnimation};

  &.is-active {
    display: block;
  }
`;
