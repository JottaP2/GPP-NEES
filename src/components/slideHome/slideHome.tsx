'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import { useSyncExternalStore } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const emptySubscribe = () => () => {};

export default function SlideHome() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) return null;

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <Swiper
        className="mySwiper"
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        navigation={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 20,
          }
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
            <Image 
              src="/gabino.jpg" 
              alt="Slide 1" 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
              className="object-cover rounded-md sm:rounded-lg"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
            <Image 
              src="/riolargo1.jpg" 
              alt="Slide 2" 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
              className="object-cover rounded-md sm:rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
            <Image 
              src="/riolargo2.jpg" 
              alt="Slide 2" 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
              className="object-cover rounded-md sm:rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
            <Image 
              src="/riolargo3.jpg" 
              alt="Slide 3" 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
              className="object-cover rounded-md sm:rounded-lg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
            <Image 
              src="/riolargo4.jpg" 
              alt="Slide 4" 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
              className="object-cover rounded-md sm:rounded-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}