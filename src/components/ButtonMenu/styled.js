import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 3px;
  position: relative;

  &.active {
    span {
      background: transparent;
      opacity: 1;
      &:before,
      &:after {
        top: 0;
        left: 0;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }

  span {
    background: transparent;
    display: inline-block;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:before,
    &:after {
      content: '';
      background: var(--text-color);
      display: inline-block;
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      transition: 0.3s;
    }

    &:before {
      top: -8px;
    }

    &:after {
      bottom: -8px;
    }
  }
`;
