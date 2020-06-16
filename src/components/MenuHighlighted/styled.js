import styled from 'styled-components';
import media from 'styled-media-query';

export const Menu = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: var(--family-secondary);

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

export const Item = styled.li`
  margin-bottom: var(--space-lg);
  ${media.greaterThan('medium')`
    margin-bottom: calc(var(--space-xlg) * 1.5);
  `}

  &:last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    position: relative;
    color: var(--text-color);
    font-size: var(--text-xlarge);
    font-weight: var(--weight-normal);
    transition: 0.2s;
    ${media.greaterThan('medium')`
      font-size: var(--text-huge);
      -webkit-text-stroke: 1px ${props => props.color};
      color: transparent;
    `}

    &:hover {
      color: ${props => props.color};
    }
  }

  &.active {
    a {
      color: ${props => props.color};
      font-weight: var(--weight-light);
    }
  }
`;
