import React from 'react';
import Logo from './index';

import logo from '../../images/diogo-rodrigues-logo.svg';

export default { title: 'Logo' };

export const Default = () => <Logo title="diogo rodrigues" img={logo} />;
export const OnlyImg = () => (
  <Logo title="diogo rodrigues" img={logo} isTitleVisible={false} />
);
export const OnlyTitle = () => <Logo title="diogo rodrigues" />;
