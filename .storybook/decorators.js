import React from 'react';
import GlobalStyles from '../src/styles/global';

export const GlobalStyleDecorator = (storyFn) => (
  <>
    <div style={{ padding: '4rem' }}>
      {storyFn()}
    </div>
    <GlobalStyles />
  </>
)
