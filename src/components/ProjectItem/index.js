import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

import * as S from './styled';

const ProjectItem = ({ title, url, imgUrl, description, category }) => {
  return (
    <>
      <S.Wrapper>
        <S.LinkTo to={url}>
          {imgUrl && (
            <S.Media>
              <img src={imgUrl} alt={title} />
            </S.Media>
          )}
          <S.Content>
            <S.Title>
              <Text
                size={2}
                sizeSmall={3}
                sizeLarge={4}
                fontWeight="var(--weight-light)"
              >
                <h2>{title}</h2>
              </Text>
            </S.Title>
            <S.Description>{description}</S.Description>
            <S.Category>{category}</S.Category>
          </S.Content>
        </S.LinkTo>
      </S.Wrapper>
    </>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
};

ProjectItem.defaultProps = {
  description: null,
  category: null,
};

export default ProjectItem;
