import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Menu = ({ isSmall, isMedium, isLarge, isVertical, color, listItems }) => {
  return (
    <S.Menu isVertical={isVertical}>
      {listItems &&
        listItems.map(item => (
          <S.Item
            key={item.label}
            isSmall={isSmall}
            isMedium={isMedium}
            isLarge={isLarge}
            isVertical={isVertical}
            color={color}
            className={item.isActive ? 'active' : ''}
          >
            {item.isExternal && (
              <S.ExternalLink href={item.url} color={color}>
                {item.label}
              </S.ExternalLink>
            )}
            {!item.isExternal && (
              <S.InternalLink
                to={item.url}
                color={color}
                activeClassName="active"
              >
                {item.label}
              </S.InternalLink>
            )}
          </S.Item>
        ))}
    </S.Menu>
  );
};

Menu.propTypes = {
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  isVertical: PropTypes.bool,
  color: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
      isExternal: PropTypes.bool,
    })
  ).isRequired,
};

Menu.defaultProps = {
  isSmall: false,
  isMedium: false,
  isLarge: false,
  isVertical: false,
  color: 'var(--text-color)',
};

export default Menu;
