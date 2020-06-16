import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import GridOfLines from '../GridOfLines';

import * as S from './styled';

const HeaderOfContent = ({
  title,
  subtitle,
  beforeSubtitle,
  afterSubtitle,
  description,
  isHorizontal,
  isCentered,
  hasGrid,
}) => {
  return (
    <S.Header hasGrid={hasGrid}>
      <div className="container">
        <S.Title>{title}</S.Title>
        {hasGrid && (
          <S.Background>
            <GridOfLines height="250px" opacity={0.35} />
          </S.Background>
        )}
        <S.Subtitle isHorizontal={isHorizontal}>
          {beforeSubtitle && (
            <Text
              size={6}
              sizeSmall={8}
              sizeMedium={14}
              sizeLarge={18}
              sizeHuge={20}
              isStroke
              fontWeight="var(--weight-bold)"
              color="var(--text-color-light)"
            >
              {beforeSubtitle}
            </Text>
          )}
          {subtitle && (
            <Text
              size={6}
              sizeSmall={8}
              sizeMedium={14}
              sizeLarge={18}
              sizeHuge={20}
              fontWeight="var(--weight-light)"
            >
              {subtitle}
            </Text>
          )}
          {afterSubtitle && (
            <Text
              size={6}
              sizeSmall={8}
              sizeMedium={14}
              sizeLarge={18}
              sizeHuge={20}
              isStroke
              fontWeight="var(--weight-bold)"
              color="var(--text-color-light)"
            >
              {afterSubtitle}
            </Text>
          )}
        </S.Subtitle>
        {description && (
          <S.Description isCentered={isCentered}>{description}</S.Description>
        )}
      </div>
    </S.Header>
  );
};

HeaderOfContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  beforeSubtitle: PropTypes.string,
  afterSubtitle: PropTypes.string,
  description: PropTypes.string,
  isHorizontal: PropTypes.bool,
  isCentered: PropTypes.bool,
  hasGrid: PropTypes.bool,
};

HeaderOfContent.defaultProps = {
  subtitle: null,
  beforeSubtitle: null,
  afterSubtitle: null,
  description: null,
  isHorizontal: false,
  isCentered: false,
  hasGrid: false,
};

export default HeaderOfContent;
