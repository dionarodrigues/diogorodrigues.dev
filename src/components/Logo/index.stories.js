import React from 'react';
import Logo from './index';

import logo from '../../images/diona-rodrigues-logo.svg';

export default { title: 'Logo' };

export const Default = () => <Logo title="diona rodrigues" img={logo} />;
export const OnlyImg = () => (
  <Logo title="diona rodrigues" img={logo} isTitleVisible={false} />
);
export const OnlyTitle = () => <Logo title="diona rodrigues" />;
