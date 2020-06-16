import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../ProjectItem';

import * as S from './styled';

const ProjectList = ({ listItems }) => {
  return (
    <S.List>
      {listItems &&
        listItems.map(item => (
          <S.Item key={item.title}>
            <ProjectItem
              title={item.title}
              url={item.url}
              imgUrl={item.imgUrl}
              description={item.description}
              category={item.category}
              count={item.count}
            />
          </S.Item>
        ))}
    </S.List>
  );
};

ProjectList.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      imgUrl: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      count: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectList;
