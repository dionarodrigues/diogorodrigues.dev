import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import * as S from './styled';

const Carousel = ({ settings, renderSlides }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <S.CarouselWrapper>
      <Slider {...settings}>{renderSlides()}</Slider>
    </S.CarouselWrapper>
  );
};

Carousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  settings: PropTypes.any,
  renderSlides: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  settings: {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  },
};

export default Carousel;
