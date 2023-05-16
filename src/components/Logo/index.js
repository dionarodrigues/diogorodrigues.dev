import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// import logo from '../../images/diona-rodrigues-logo.svg';
import * as S from './styled';

const Logo = ({ title, img, isTitleVisible, link }) => {
  return (
    <S.Brand>
      <S.LinkTo>
        <AniLink
          cover
          direction="right"
          duration={1}
          bg="var(--border-color)"
          to={link}
        >
          {img && <img src={img} alt={title} />}
          {isTitleVisible && <S.Title>{title}</S.Title>}
        </AniLink>
      </S.LinkTo>
    </S.Brand>
  );
};

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  isTitleVisible: PropTypes.bool,
  link: PropTypes.string,
};

Logo.defaultProps = {
  img: null,
  isTitleVisible: true,
  link: null,
};

export default Logo;
