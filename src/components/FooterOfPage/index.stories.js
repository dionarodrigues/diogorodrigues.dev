import React from 'react';
import FooterOfPage from './index';

import Menu from '../Menu';

export default { title: 'Footer of Page' };

export const Default = () => (
  <FooterOfPage
    circleText="I am available for freelance - get in touch -"
    email="hello@diogorodrigues.dev"
    renderMainMenu={() => (
      <Menu
        color="var(--text-color-light)"
        isMedium
        listItems={[
          {
            label: 'home',
            url: '',
          },
          {
            label: 'about',
            url: '',
          },
          {
            label: 'work',
            url: '',
          },
          {
            label: 'blog',
            url: '',
          },
          {
            label: 'contact',
            url: '',
          },
        ]}
      />
    )}
    renderSocialMenu={() => (
      <Menu
        isLarge
        listItems={[
          {
            label: 'linkedin',
            url: '',
          },
          {
            label: 'behance',
            url: '',
          },
          {
            label: 'instagram',
            url: '',
          },
          {
            label: 'github',
            url: '',
          },
          {
            label: 'twitter',
            url: '',
          },
        ]}
      />
    )}
    renderInfo={() => (
      <>
        <p>São Paulo / Brazil</p>
        <p>
          All rights reserved. © Diogo Rodrigues <br />
          Site made using Gatsby JS ♥.
        </p>
      </>
    )}
  />
);

export const isSimplified = () => (
  <FooterOfPage
    renderMainMenu={() => (
      <Menu
        color="var(--text-color-light)"
        isMedium
        listItems={[
          {
            label: 'home',
            url: '',
          },
          {
            label: 'about',
            url: '',
          },
          {
            label: 'work',
            url: '',
          },
          {
            label: 'blog',
            url: '',
          },
          {
            label: 'contact',
            url: '',
          },
        ]}
      />
    )}
    renderInfo={() => (
      <>
        <p>São Paulo / Brazil</p>
        <p>
          All rights reserved. © Diogo Rodrigues <br />
          Site made using Gatsby JS ♥.
        </p>
      </>
    )}
    isSimplified
  />
);
