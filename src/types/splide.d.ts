declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';

  export interface SplideProps {
    options?: {
      type?: string;
      drag?: string | boolean;
      focus?: string | number;
      perPage?: number;
      perMove?: number;
      autoplay?: boolean;
      interval?: number;
      speed?: number;
      gap?: string | number;
      arrows?: boolean;
      pagination?: boolean;
      pauseOnHover?: boolean;
      pauseOnFocus?: boolean;
      resetProgress?: boolean;
      easing?: string;
      breakpoints?: Record<number, Record<string, unknown>>;
      [key: string]: unknown;
    };
    className?: string;
    children?: ReactNode;
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

declare module '@splidejs/react-splide/css' {
  const content: void;
  export default content;
}