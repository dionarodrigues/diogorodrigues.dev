import React from 'react';
import Text from './index';

export default { title: 'Text' };

export const Default = () => (
  <Text>
    <p>Text</p>
  </Text>
);

export const FontFamily = () => (
  <Text fontFamily="var(--family-primary)">
    <p>Text</p>
  </Text>
);

export const Monospace = () => (
  <Text fontFamily="var(--family-monospace)">
    <p>Text</p>
  </Text>
);

export const Size = () => (
  <Text size={20}>
    <h1>Text</h1>
  </Text>
);

export const isStroke = () => (
  <Text size={20} isStroke>
    <h1>Text</h1>
  </Text>
);

export const Strong = () => (
  <Text size={20} isStroke>
    <h3>
      <strong>Text</strong>
    </h3>
  </Text>
);

export const Light = () => (
  <Text size={20} isStroke fontWeight="var(--weight-light)">
    <h3>Text</h3>
  </Text>
);

export const Link = () => (
  <Text size={3}>
    <a href="/">hello@dionarodrigues.dev</a>
  </Text>
);

export const ResponsiveSizes = () => (
  <Text sizeSmall={5} sizeMedium={10} sizeLarge={15} sizeHuge={20}>
    <h1>Text</h1>
  </Text>
);
