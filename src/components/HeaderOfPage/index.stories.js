import React from 'react';
import HeaderOfPage from './index';
import Menu from '../Menu';
import MenuHighlighted from '../MenuHighlighted';

export default { title: 'Header of Page' };

export const Default = () => (
  <HeaderOfPage
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
      <Menu
        listItems={[
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
    renderMainMenuMobile={() => (
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
