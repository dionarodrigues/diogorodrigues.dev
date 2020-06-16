import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const Menu = styled.ul`
  position: relative;
  display: flex;
  flex-direction: ${props => (props.isVertical ? 'column' : 'row')};
  font-family: var(--family-secondary);
  flex-direction: ${props => {
    if (props.isVertical) return 'column';
    return 'row';
  }};
`;

export const Item = styled.li`
  margin: 0;
  font-size: ${props => {
    if (props.isSmall === true) return 'var(--text-small)';
    if (props.isMedium === true) return 'var(--text-medium)';
    if (props.isLarge === true) return 'var(--text-large)';
    return 'var(--text-normal)';
  }};

  ${media.lessThan('small')`
    font-size: var(--text-normal);
  `}

  & + & {
    margin-left: ${props => {
      if (props.isVertical) return '0';
      if (props.isMedium) return 'calc(var(--space)*1.3)';
      if (props.isLarge) return 'var(--space-lg)';
      return 'var(--space)';
    }};
  }

  &:last-child {
    ${media.lessThan('medium')`
      margin-bottom: 0;
    `}
  }
`;

export const InternalLink = styled(Link)`
  text-decoration: none;
  position: relative;
  color: ${props => props.color};

  &:after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -13px;
    left: 0;
    background: ${props => props.color};
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    &:after {
      bottom: ${props => (props.isVertical ? '-1px' : '-7px')};
      opacity: 1;
    }
  }

  ${Item}.active &,
  &.active {
    &:after {
      bottom: ${props => (props.isVertical ? '-1px' : '-7px')};
      opacity: 1;
    }
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  position: relative;
  color: ${props => props.color};

  &:after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -13px;
    left: 0;
    background: ${props => props.color};
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    &:after {
      bottom: ${props => (props.isVertical ? '-1px' : '-7px')};
      opacity: 1;
    }
  }
`;
