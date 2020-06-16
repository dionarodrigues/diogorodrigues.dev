import React from 'react';
import Carousel from './index';
import ProjectItem from '../ProjectItem';

export default { title: 'Carousel' };

export const Default = () => (
  <Carousel
    renderSlides={() => [
      <div key={1}>
        <strong>Slide 1</strong>
      </div>,
      <div key={2}>
        <strong>Slide 2</strong>
      </div>,
      <div key={3}>
        <strong>Slide 3</strong>
      </div>,
      <div key={4}>
        <strong>Slide 4</strong>
      </div>,
      <div key={5}>
        <strong>Slide 5</strong>
      </div>,
      <div key={6}>
        <strong>Slide 6</strong>
      </div>,
    ]}
  />
);

export const Posts = () => (
  <Carousel
    settings={{
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
    }}
    renderSlides={() => [
      <div>
        <ProjectItem
          title="post title"
          url="/"
          imgUrl="https://i.pinimg.com/originals/22/9c/ce/229cce499125d9c74b923716bd1222bb.gif"
          description="A new learning platform helping children learn to play the beautiful game"
          category="design & development"
          count=""
        />
      </div>,
      <div>
        <ProjectItem
          title="nike"
          url="/"
          imgUrl="https://i.ytimg.com/vi/Z5_WLK-EwyU/maxresdefault.jpg"
          description="A new learning platform helping children learn to play the beautiful game"
          category="design & development"
          count=""
        />
      </div>,
      <div>
        <ProjectItem
          title="post title"
          url="/"
          imgUrl="https://i.pinimg.com/originals/22/9c/ce/229cce499125d9c74b923716bd1222bb.gif"
          description="A new learning platform helping children learn to play the beautiful game"
          category="design & development"
          count=""
        />
      </div>,
      <div>
        <ProjectItem
          title="nike"
          url="/"
          imgUrl="https://i.ytimg.com/vi/Z5_WLK-EwyU/maxresdefault.jpg"
          description="A new learning platform helping children learn to play the beautiful game"
          category="design & development"
          count=""
        />
      </div>,
      <div>
        <ProjectItem
          title="post title"
          url="/"
          imgUrl="https://i.pinimg.com/originals/22/9c/ce/229cce499125d9c74b923716bd1222bb.gif"
          description="A new learning platform helping children learn to play the beautiful game"
          category="design & development"
          count=""
        />
      </div>,
      <div>
        <ProjectItem
          title="nike"
          url="/"
          imgUrl="https://i.ytimg.com/vi/Z5_WLK-EwyU/maxresdefault.jpg"
          description="A new learning platform helping children learn to play the beautiful game"
          category="design & development"
          count=""
        />
      </div>,
    ]}
  />
);
