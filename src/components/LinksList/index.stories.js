import React from 'react';
import LinksList from './index';

export default { title: 'Links List' };

export const Default = () => (
  <LinksList
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        date: '03/27/2020',
        isExternal: false,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        date: '01/16/2020',
        isExternal: false,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        date: '12/26/2019',
        isExternal: false,
      },
    ]}
  />
);

export const ExternalLinks = () => (
  <LinksList
    listItems={[
      {
        label: 'Link 1',
        url: 'https://www.google.com',
        date: '',
        isExternal: true,
      },
      {
        label: 'Link 2',
        url: 'https://www.google.com',
        date: '',
        isExternal: true,
      },
      {
        label: 'Link 3',
        url: 'https://www.google.com',
        date: '',
        isExternal: true,
      },
    ]}
  />
);
