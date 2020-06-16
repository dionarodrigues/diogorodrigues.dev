import React from 'react';
import ArrowStroke from './index';

export default { title: 'Arrow Stroke' };

export const Default = () => <ArrowStroke />;
export const Top = () => <ArrowStroke direction="top" />;
export const Right = () => <ArrowStroke direction="right" />;
export const Bottom = () => <ArrowStroke direction="bottom" />;
export const Left = () => <ArrowStroke direction="left" />;
export const FortyFive = () => <ArrowStroke direction="45" />;
export const Small = () => <ArrowStroke size={20} />;
export const Large = () => <ArrowStroke size={300} />;
