import React from 'react';
import Slider from 'react-slick';

import ava01 from '../../../assets/images/ava01.png';
import ava02 from '../../../assets/images/ava02.png';
import ava03 from '../../../assets/images/ava03.png';

import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum
          iusto ipsam et quibusdam magni quia officiis eos pariatur facere
          architecto ab nostrum alias cupiditate, voluptas explicabo, neque,
          excepturi soluta.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar1" className="rounded" />
          <h6>John Doe</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum
          iusto ipsam et quibusdam magni quia officiis eos pariatur facere
          architecto ab nostrum alias cupiditate, voluptas explicabo, neque,
          excepturi soluta.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar2" className="rounded" />
          <h6>Mitchel Marsh</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum
          iusto ipsam et quibusdam magni quia officiis eos pariatur facere
          architecto ab nostrum alias cupiditate, voluptas explicabo, neque,
          excepturi soluta.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar3" className="rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
