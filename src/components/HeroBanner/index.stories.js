import React from 'react';
import HeroBanner from './index';

export default { title: 'Hero of Banner' };

export const Default = () => <HeroBanner />;

export const WithDescriptionAndBackground = () => (
  <HeroBanner
    description='I create <span class="has-text-underline">digital experiences</span>
<br /> through design & code'
    background="url(https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/canada-usa-flags.jpg)"
  />
);
