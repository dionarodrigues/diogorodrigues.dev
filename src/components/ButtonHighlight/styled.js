import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-color: ${props => props.color};
  border-radius: var(--radius-rounded);
  color: var(--text-color);
  cursor: pointer;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: relative;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.color};
  }
`;

export const Content = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.span`
  font-size: var(--text-normal);
  margin-bottom: var(--space-xs);
`;

export const Icon = styled.div`
  width: 30%;

  & > div {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
