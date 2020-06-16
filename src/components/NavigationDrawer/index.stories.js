import React from 'react';
import NavigationDrawer from './index';
import Menu from '../Menu';
import MenuHighlighted from '../MenuHighlighted';

export default { title: 'Navigation Drawer' };

export const Default = () => (
  <NavigationDrawer
    renderLanguagesMenu={() => (
      <Menu
        listItems={[
          {
            label: 'en',
            url: '/',
            isActive: false,
          },
          {
            label: 'pt',
            url: '/',
            isActive: false,
          },
        ]}
      />
    )}
    renderMainMenu={() => (
      <MenuHighlighted
        listItems={[
          {
            label: 'home',
            url: '/',
            isActive: true,
          },
          {
            label: 'work',
            url: '/',
            isActive: false,
          },
          {
            label: 'about',
            url: '/',
            isActive: false,
          },
          {
            label: 'blog',
            url: '/',
            isActive: false,
          },
          {
            label: 'contact',
            url: '/',
            isActive: false,
          },
        ]}
      />
    )}
    renderSocialMenu={() => (
      <Menu
        isLarge
        listItems={[
          {
            label: 'linkedIn',
            url: '/',
            isActive: false,
          },
          {
            label: 'behance',
            url: '/',
            isActive: false,
          },
          {
            label: 'github',
            url: '/',
            isActive: false,
          },
          {
            label: 'twitter',
            url: '/',
            isActive: false,
          },
          {
            label: 'instagram',
            url: '/',
            isActive: false,
          },
        ]}
      />
    )}
  />
);
