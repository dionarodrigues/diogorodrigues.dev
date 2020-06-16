import React from 'react';

import * as S from './styled';

const TitleHero = props => {
  const { title, size } = props;

  return <S.Title dangerouslySetInnerHTML={{ __html: title }} size={size} />;
};

export default TitleHero;
