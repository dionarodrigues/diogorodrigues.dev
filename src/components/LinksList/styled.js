import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const Menu = styled.ul``;

export const Item = styled.li`
  position: relative;
  border-bottom: 1px solid var(--border-color);
  /* & + & {
    border-top: 1px solid var(--primary-color);
  } */
`;

export const ExternalLink = styled.a`
  color: var(--text-color);
  display: block;
  padding: calc(var(--space) / 1.5);
  position: relative;
  padding-right: ${props => (props.hasexternallink ? '60px' : '0')};
  padding-left: ${props => (props.hasdate ? '110px' : '20px')};
  text-decoration: none;
  transition: 0.2s;

  ${media.lessThan('medium')`
    padding-left: 20px;
  `}
`;

export const InternalLink = styled(Link)`
  color: var(--text-color);
  display: block;
  padding: var(--space) calc(var(--space) / 1.5);
  position: relative;
  padding-right: ${props => (props.hasexternallink ? '60px' : '0')};
  padding-left: ${props => (props.hasdate ? '110px' : '20px')};
  text-decoration: none;
  transition: 0.2s;

  ${media.lessThan('medium')`
    padding-left: 20px;
  `}

  ${media.greaterThan('large')`
    padding-bottom: var(--space-lg);
    padding-top: var(--space-lg);
  `}
`;

export const Date = styled.div`
  font-size: var(--text-small);
  font-weight: var(--weight-normal);
  color: var(--text-color-light);
  ${media.greaterThan('medium')`
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-25deg);
    left: 20px;
  `}
`;

export const Title = styled.div`
  position: relative;
  left: 0;
  transition: 0.2s;

  ${ExternalLink}:hover & {
    left: 3px;
    div {
      color: var(--primary-color);
    }
  }

  ${InternalLink}:hover & {
    left: 3px;
    div {
      color: var(--primary-color);
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`;
