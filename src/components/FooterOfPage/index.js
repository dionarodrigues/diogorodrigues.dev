import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import CircleTextRotation from '../CircleTextRotation';

import localizedLink from '../localizedLink';

import * as S from './styled';

const FooterOfPage = ({ renderSocialMenu, renderInfo, circleText, locale }) => {
  return (
    <S.Footer>
      <div className="container">
        <S.ButtonCircle>
          <Link
            to={localizedLink(
              `${locale === 'pt' ? '/contato' : '/contact'}`,
              locale
            )}
          >
            <CircleTextRotation
              text={circleText}
              letterSpacing={6.8}
              hasArrow
            />
          </Link>
        </S.ButtonCircle>
        <S.SocialLinks>{renderSocialMenu && renderSocialMenu()}</S.SocialLinks>
        <div className="container">{renderInfo && renderInfo()}</div>
        <p>
          <a href="https://www.gatsbyjs.org/">Gatsby</a> 💖
        </p>
      </div>
    </S.Footer>
  );
};

FooterOfPage.propTypes = {
  renderSocialMenu: PropTypes.func,
  renderInfo: PropTypes.func.isRequired,
  circleText: PropTypes.string,
  locale: PropTypes.string,
};

FooterOfPage.defaultProps = {
  renderSocialMenu: null,
  circleText: null,
  locale: null,
};

export default FooterOfPage;
