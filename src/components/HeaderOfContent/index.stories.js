import React from 'react';
import HeaderOfContent from './index';

export default { title: 'Header of Content' };

export const Default = () => (
  <HeaderOfContent
    title="About"
    subtitle="dionarodrigues"
    beforeSubtitle="hi, I'm"
    afterSubtitle="front-end designer"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
);

export const IsHorizontal = () => (
  <HeaderOfContent
    title="Blog"
    subtitle="thoughts"
    beforeSubtitle="words&"
    description="This is a collection of my gruesome attempts to write something
    interesting and useful. I'll keep trying."
    isHorizontal
  />
);

export const HasGrid = () => (
  <HeaderOfContent
    title="Works"
    subtitle="works"
    beforeSubtitle="works&"
    afterSubtitle="&works"
    description="This is a collection of my gruesome attempts to write something
    interesting and useful. I'll keep trying."
    isHorizontal
    hasGrid
  />
);
