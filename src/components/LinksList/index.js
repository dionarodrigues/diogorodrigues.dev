import React from 'react';
import PropTypes from 'prop-types';
import ArrowStroke from '../ArrowStroke';
import Text from '../Text';

import * as S from './styled';

const LinksList = ({ listItems }) => {
  return (
    <S.Menu>
      {listItems &&
        listItems.map(item => (
          <S.Item key={item.label}>
            {item.isExternal && (
              <S.ExternalLink
                href={item.url}
                hasdate={item.date}
                hasexternallink={item.isExternal.toString()}
              >
                {item.date && <S.Date>{item.date}</S.Date>}
                <S.Title>
                  <Text size={2} sizeLarge={3} fontWeight="var(--weight-light)">
                    {item.label}
                  </Text>
                </S.Title>
                <S.Icon>
                  <ArrowStroke direction="45" size={15} />
                </S.Icon>
              </S.ExternalLink>
            )}

            {!item.isExternal && (
              <S.InternalLink
                to={item.url}
                hasdate={item.date}
                hasexternallink={item.isExternal.toString()}
              >
                {item.date && <S.Date>{item.date}</S.Date>}
                <S.Title>
                  <Text size={2} sizeLarge={3} fontWeight="var(--weight-light)">
                    {item.label}
                  </Text>
                </S.Title>
              </S.InternalLink>
            )}
          </S.Item>
        ))}
    </S.Menu>
  );
};

LinksList.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
      isExternal: PropTypes.bool,
    })
  ).isRequired,
};

export default LinksList;
