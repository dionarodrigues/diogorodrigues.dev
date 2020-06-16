import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const NavigationDrawer = ({
  renderLanguagesMenu,
  renderMainMenu,
  renderSocialMenu,
  handleToggleMenu,
}) => {
  return (
    <S.Nav>
      <S.MainMenu>{renderMainMenu && renderMainMenu()}</S.MainMenu>

      {/* <S.SocialMenu>{renderSocialMenu && renderSocialMenu()}</S.SocialMenu> */}

      <S.LanguagesMenu>
        {renderLanguagesMenu && renderLanguagesMenu()}
      </S.LanguagesMenu>
    </S.Nav>
  );
};

NavigationDrawer.propTypes = {
  renderLanguagesMenu: PropTypes.func.isRequired,
  renderMainMenu: PropTypes.func.isRequired,
  renderSocialMenu: PropTypes.func.isRequired,
};

export default NavigationDrawer;
