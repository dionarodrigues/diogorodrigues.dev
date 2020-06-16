import React from 'react';
import CircleTextRotation from './index';

export default { title: 'Circle Text Rotation' };

export const Default = () => (
  <CircleTextRotation
    text="I am available for freelance - get in touch -"
    letterSpacing={7.3}
  />
);

export const HasArrow = () => (
  <CircleTextRotation
    text="I am available for freelance - get in touch -"
    letterSpacing={7.3}
    hasArrow
  />
);
