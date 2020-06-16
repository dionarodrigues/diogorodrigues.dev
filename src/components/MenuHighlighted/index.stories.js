import React from 'react';
import MenuHighlighted from './index';

export default { title: 'Menu Highlighted' };

export const Default = () => (
  <MenuHighlighted
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        isActive: true,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        isActive: false,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        isActive: false,
      },
    ]}
  />
);

export const isColored = () => (
  <MenuHighlighted
    isLarge
    color="springgreen"
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        isActive: true,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        isActive: false,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        isActive: false,
      },
    ]}
  />
);
