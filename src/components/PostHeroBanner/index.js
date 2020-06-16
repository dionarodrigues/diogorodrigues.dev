import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import ButtonBack from '../ButtonBack';

import localizedLink from '../localizedLink';
import { useLocale } from '../../hooks/locale';

import * as S from './styled';

const PostHeroBanner = ({
  title,
  description,
  imgUrl,
  author,
  date,
  category,
  timeToRead,
}) => {
  const { locale } = useLocale();

  return (
    <S.Banner
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="container-large">
        <S.Breadcrumb>
          <ButtonBack link={localizedLink('/blog', locale)} text="Blog" />
        </S.Breadcrumb>
        <S.Title>
          <Text
            size={3.5}
            sizeSmall={5}
            sizeMedium={6}
            sizeLarge={11}
            fontWeight="var(--weight-light)"
          >
            {title}
          </Text>
        </S.Title>
        <S.Description>{description}</S.Description>

        <S.Info>
          {author && `${author} - `} {date} - {category && `#${category}`} -{' '}
          {timeToRead}
        </S.Info>
      </div>
    </S.Banner>
  );
};

PostHeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string,
  imgUrl: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

PostHeroBanner.defaultProps = {
  author: null,
  category: null,
  timeToRead: null,
  imgUrl: null,
};

export default PostHeroBanner;
