import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { useMenu } from '../../hooks/menu';

import * as S from './styled';

const MenuHighlighted = ({ color, listItems }) => {
  const { toggleMenu } = useMenu();

  return (
    <S.Menu>
      {listItems &&
        listItems.map(item => (
          <S.Item
            key={item.label}
            color={color}
            className={item.isActive ? 'active' : ''}
          >
            <AniLink
              cover
              direction="left"
              duration={1}
              bg="var(--border-color)"
              to={item.url}
              onClick={() => toggleMenu()}
            >
              {item.label}
            </AniLink>
          </S.Item>
        ))}
    </S.Menu>
  );
};

MenuHighlighted.propTypes = {
  color: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

MenuHighlighted.defaultProps = {
  color: 'var(--text-color)',
};

export default MenuHighlighted;
