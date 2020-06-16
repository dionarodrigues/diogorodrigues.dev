import React from 'react';
import ButtonHighlight from './index';

export default { title: 'Button Highlight' };

export const Default = () => <ButtonHighlight title="Link" link="/" />;

export const Small = () => <ButtonHighlight title="Link" size={150} link="/" />;

export const OnlyIcon = () => (
  <ButtonHighlight size={150} color="transparent" link="/" />
);
