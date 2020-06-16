import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import ButtonBack from '../ButtonBack';
import GridOfLines from '../GridOfLines';

import localizedLink from '../localizedLink';

import { useLocale } from '../../hooks/locale';

import * as S from './styled';

const PostProjectBanner = ({ title, projectInfo }) => {
  const { locale } = useLocale();

  return (
    <S.Banner>
      <S.Background>
        <GridOfLines height="400px" opacity={0.2} />
      </S.Background>
      <div className="container-large">
        <S.Breadcrumb>
          <ButtonBack
            link={localizedLink('/portfolio', locale)}
            text="Portfolio"
          />
        </S.Breadcrumb>
        <S.Header>
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

          <S.Info>
            {projectInfo &&
              projectInfo.map((item, index) => (
                <S.InfoItem key={index}>
                  <h2>{item.label}</h2>
                  <p>{item.description}</p>
                </S.InfoItem>
              ))}
          </S.Info>
        </S.Header>
      </div>
    </S.Banner>
  );
};

PostProjectBanner.propTypes = {
  title: PropTypes.string.isRequired,
  projectInfo: PropTypes.array,
};

PostProjectBanner.defaultProps = {
  projectInfo: null,
};

export default PostProjectBanner;
