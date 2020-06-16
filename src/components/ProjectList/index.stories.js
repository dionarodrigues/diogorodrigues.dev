import React from 'react';
import PostsList from './index';

export default { title: 'Posts List' };

export const Default = () => (
  <PostsList
    listItems={[
      {
        title: 'Link 1',
        url: 'https://www.google.com',
        imgUrl:
          'https://i.pinimg.com/originals/22/9c/ce/229cce499125d9c74b923716bd1222bb.gif',
        description: 'Lorem Ipsum Description',
        category: 'category',
        count: '01',
      },
      {
        title: 'Link 2',
        url: 'https://www.google.com',
        imgUrl: 'https://i.ytimg.com/vi/Z5_WLK-EwyU/maxresdefault.jpg',
        description: 'Lorem Ipsum Description',
        category: 'category',
        count: '02',
      },
    ]}
  />
);
