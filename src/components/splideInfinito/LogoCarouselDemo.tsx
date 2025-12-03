'use client';
import Image from 'next/image';
import React from 'react';

// @ts-ignore
import { Splide as SplideCarousel, SplideSlide as CarouselSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import './LogoCarousel.css';

interface LogoCarouselProps {
  logos: Array<{
    id: string;
    src: string;
    alt: string;
  }>;
}

const LogoCarouselDemo: React.FC<LogoCarouselProps> = ({ logos }) => {
  const splideOptions = {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    speed: 800,
    gap: '1rem',
    arrows: false,
    pagination: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    resetProgress: false,
    easing: 'linear',
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  };

  return (
    <div className="logo-carousel-container">
      <SplideCarousel options={splideOptions} className="logo-carousel">
        {logos.map((logo) => (
          <CarouselSlide key={logo.id}>
            <div className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={400}
                height={100}
                className="logo-image"
                loading="lazy"
              />
            </div>
          </CarouselSlide>
        ))}
      </SplideCarousel>
    </div>
  );
};

export default LogoCarouselDemo;

