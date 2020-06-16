import React from 'react';
import ProjectItem from './index';

export default { title: 'Post Item' };

export const Default = () => (
  <ProjectItem
    title="post title"
    url="/"
    imgUrl="https://i.pinimg.com/originals/22/9c/ce/229cce499125d9c74b923716bd1222bb.gif"
    description="A new learning platform helping children learn to play the beautiful game"
    category="design & development"
    count=""
  />
);

export const WithCount = () => (
  <ProjectItem
    title="nike"
    url="/"
    imgUrl="https://i.ytimg.com/vi/Z5_WLK-EwyU/maxresdefault.jpg"
    description="A new learning platform helping children learn to play the beautiful game"
    category="design & development"
    count="02"
  />
);
