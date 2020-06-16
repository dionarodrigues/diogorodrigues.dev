import React from 'react';
import ProjectHeroBanner from './index';

export default { title: 'Project Hero Banner' };

const projectInfo = [
  {
    label: 'client',
    description: 'Nike Brasil',
  },
  {
    label: 'role',
    description: 'Web designer | Front-end developer',
  },
  {
    label: 'technologies',
    description: 'Angular Framework, HTML, CSS e muito JS',
  },
];

export const Default = () => (
  <ProjectHeroBanner
    title="A new learning platform helping children learn to play the beautiful game"
    projectInfo={projectInfo}
  />
);
