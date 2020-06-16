import styled from 'styled-components';
import media from 'styled-media-query';

export const CarouselWrapper = styled.div`
  .slick-slide {
    padding: 0 var(--space-sm);
    ${media.greaterThan('medium')`
      padding: 0 var(--space);
    `}
    ${media.greaterThan('huge')`
      padding: 0 calc(var(--space));
    `}
  }

  .slick-prev,
  .slick-next {
    background: var(--primary-color);
    width: 50px;
    height: 50px;
    border-radius: 100%;
    z-index: 5;
    opacity: 0.4;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &:before {
      font-size: 25px;
      position: relative;
      top: -3px;
    }
  }

  .slick-prev {
    &:before {
      content: '⇐';
    }
  }

  .slick-next {
    &:before {
      content: '⇒';
    }
  }
`;
