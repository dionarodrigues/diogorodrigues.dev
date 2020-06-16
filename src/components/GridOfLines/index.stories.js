import React from 'react';
import GridOfLines from './index';

export default { title: 'Grid of Lines' };

export const Default = () => <GridOfLines />;

export const Customized = () => (
  <GridOfLines width="250px" height="250px" opacity={0.5} />
);
