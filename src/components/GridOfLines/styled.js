import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(var(--text-color-rgb), 0.12) 25%,
      rgba(var(--text-color-rgb), 0.12) 26%,
      transparent 27%,
      transparent 74%,
      rgba(var(--text-color-rgb), 0.12) 75%,
      rgba(var(--text-color-rgb), 0.12) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(var(--text-color-rgb), 0.12) 25%,
      rgba(var(--text-color-rgb), 0.12) 26%,
      transparent 27%,
      transparent 74%,
      rgba(var(--text-color-rgb), 0.12) 75%,
      rgba(var(--text-color-rgb), 0.12) 76%,
      transparent 77%,
      transparent
    );
  background-size: ${props =>
    `${props.backgroundSize} ${props.backgroundSize}`};
  opacity: ${props => `${props.opacity}`};
`;
