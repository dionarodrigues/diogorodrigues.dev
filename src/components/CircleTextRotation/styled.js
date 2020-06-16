import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  position: relative;
`;

export const Circle = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;

  text {
    font-family: var(--family-primary);
    font-size: var(--text);
    fill: var(--text-color);
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    letter-spacing: 1px;

    animation-name: rotate;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -55%);
`;
