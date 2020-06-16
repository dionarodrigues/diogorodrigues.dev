import styled from 'styled-components';

export const Arrow = styled.div`
  display: inline-block;
  transform: ${props => {
    if (props.direction === 'top') return 'rotate(-180deg)';
    if (props.direction === 'right') return 'rotate(-90deg)';
    if (props.direction === 'bottom') return 'rotate(0deg)';
    if (props.direction === 'left') return 'rotate(90deg)';
    if (props.direction === '45') return 'rotate(-135deg)';
    return 'rotate(0deg)';
  }};

  width: ${props => props.size}px;

  img {
    width: 100%;
  }
`;
