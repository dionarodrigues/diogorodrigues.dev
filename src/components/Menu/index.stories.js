import React from 'react';
import Menu from './index';

export default { title: 'Menu' };

export const Default = () => (
  <Menu
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        isActive: true,
        isExternal: false,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
    ]}
  />
);

export const Small = () => (
  <Menu
    isSmall
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        isActive: true,
        isExternal: false,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
    ]}
  />
);

export const Medium = () => (
  <Menu
    isMedium
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        isActive: true,
        isExternal: false,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
    ]}
  />
);

export const Large = () => (
  <Menu
    isLarge
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        isActive: true,
        isExternal: false,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
    ]}
  />
);

export const Vertical = () => (
  <Menu
    isVertical
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        isActive: true,
        isExternal: false,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: false,
      },
    ]}
  />
);

export const isColored = () => (
  <Menu
    isLarge
    color="springgreen"
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        isActive: true,
        isExternal: true,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: true,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        isActive: false,
        isExternal: true,
      },
    ]}
  />
);
