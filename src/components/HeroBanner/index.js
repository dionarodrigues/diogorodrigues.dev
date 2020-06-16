import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import localizedLink from '../localizedLink';
import Text from '../Text';

import * as S from './styled';

const HeroBanner = ({
  title,
  description,
  aboutMeShort,
  locale,
  background,
}) => {
  return (
    <S.Banner
      style={{
        backgroundImage: background,
      }}
    >
      <div className="container">
        <S.Content>
          <S.Title dangerouslySetInnerHTML={{ __html: title }} />
          <S.Highlight>
            <div>
              <Text
                size={7}
                sizeSmall={10}
                sizeMedium={15}
                sizeLarge={21}
                sizeHuge={25}
                fontWeight="var(--weight-bold)"
                isStroke
              >
                front-end
              </Text>
            </div>
            <div>
              <Text
                size={4}
                sizeSmall={6}
                sizeMedium={8}
                sizeLarge={13}
                fontWeight="var(--weight-light)"
              >
                &
              </Text>
            </div>
            <div>
              <Text
                size={8}
                sizeSmall={10}
                sizeMedium={13}
                sizeLarge={18}
                sizeHuge={22}
                fontWeight="var(--weight-light)"
              >
                designer
              </Text>
              <strong
                style={{ position: 'absolute', left: '-150%', top: '-150%' }}
              >
                Web designer
              </strong>
            </div>
          </S.Highlight>
          {description && (
            <S.Subtitle dangerouslySetInnerHTML={{ __html: description }} />
          )}

          <S.Bio>
            <div dangerouslySetInnerHTML={{ __html: aboutMeShort }} />
            <p>
              {locale === 'pt' ? (
                <Link to={localizedLink(`/sobre`, locale)}>
                  Leia mais sobre mim aqui.
                </Link>
              ) : (
                <Link to={localizedLink(`/about`, locale)}>
                  Read more about me here.
                </Link>
              )}
            </p>
          </S.Bio>
        </S.Content>
      </div>
    </S.Banner>
  );
};

HeroBanner.propTypes = {
  description: PropTypes.string,
  background: PropTypes.string,
  title: PropTypes.string,
  aboutMeShort: PropTypes.string,
  locale: PropTypes.string,
};

HeroBanner.defaultProps = {
  description: null,
  background: null,
  title: null,
  aboutMeShort: null,
  locale: 'en',
};

export default HeroBanner;
