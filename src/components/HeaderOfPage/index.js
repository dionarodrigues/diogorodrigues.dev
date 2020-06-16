import React from 'react';
import PropTypes from 'prop-types';

import { useMenu } from '../../hooks/menu';
import { useTheme } from '../../hooks/theme';

import NavigationDrawer from '../NavigationDrawer';
import Logo from '../Logo';
import ButtonMenu from '../ButtonMenu';
import ButtonToggleTheme from '../ButtonToggleTheme';

import logoBlack from '../../images/diogo-rodrigues-logo.svg';
import logoWhite from '../../images/diogo-rodrigues-logo-white.svg';

import * as S from './styled';

const HeaderOfPage = ({
  renderLanguagesMenu,
  // renderMainMenu,
  renderMainMenuMobile,
  renderSocialMenu,
  locale,
}) => {
  const { openedMenu, toggleMenu } = useMenu();
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <S.Header>
      <div className="container">
        <S.Brand>
          <Logo
            title="diogo rodrigues"
            img={isDarkMode ? logoWhite : logoBlack}
            isTitleVisible={false}
            link={`${locale === 'pt' ? '/pt' : '/'}`}
          />
        </S.Brand>

        <S.Navbar>
          <S.ButtonToggleTheme>
            <ButtonToggleTheme
              isDarkMode={isDarkMode}
              handleClick={() =>
                window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
              }
            />
          </S.ButtonToggleTheme>

          <S.LanguagesMenu>
            {renderLanguagesMenu && renderLanguagesMenu()}
          </S.LanguagesMenu>
          {/* <S.MainMenu>{renderMainMenu && renderMainMenu()}</S.MainMenu> */}

          <S.NavDrawer className={openedMenu ? 'is-active' : ''}>
            <NavigationDrawer
              renderMainMenu={renderMainMenuMobile}
              renderLanguagesMenu={renderLanguagesMenu}
              renderSocialMenu={renderSocialMenu}
            />
          </S.NavDrawer>

          <S.ButtonMenu className={openedMenu ? 'is-active' : ''}>
            <ButtonMenu handleClick={toggleMenu} isActive={openedMenu} />
          </S.ButtonMenu>
        </S.Navbar>
      </div>
    </S.Header>
  );
};

HeaderOfPage.propTypes = {
  renderLanguagesMenu: PropTypes.func.isRequired,
  // renderMainMenu: PropTypes.func.isRequired,
  renderMainMenuMobile: PropTypes.func.isRequired,
  renderSocialMenu: PropTypes.func.isRequired,
  locale: PropTypes.string,
};

HeaderOfPage.defaultProps = {
  locale: null,
};

export default HeaderOfPage;
