import React from 'react'

import { ContainerData } from './CarouselCalendar-styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { CarouselDay } from '../CarouselDay/CarouselDay'

export function CarouselCalendar({ data }) {
  return (
    <Swiper
      className="calendar"
      spaceBetween={2}
      slidesPerView={4.4}
      mousewheel={true}
      breakpoints={{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 2
        },
        375: {
          slidesPerView: 1.3,
          spaceBetween: 2
        },
        600: {
          slidesPerView: 1.8,
          spaceBetween: 2
        },
        768: {
          slidesPerView: 2.6,
          spaceBetween: 2
        },

        820: {
          slidesPerView: 2.1,
          spaceBetween: 2
        },

        1024: {
          slidesPerView: 2.6,
          spaceBetween: 2
        },
        1200: {
          slidesPerView: 2.8,
          spaceBetween: 2
        },
        1300: {
          slidesPerView: 3.2,
          spaceBetween: 2
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 8
        }
      }}
    >
      {data.map(data => {
        return (
          <SwiperSlide>
            <ContainerData isToday={data.isToday}>
              <span>{data.day}</span>
              <p>{data.weekDay}</p>
              <p>{data.isToday}</p>
            </ContainerData>
            <CarouselDay dataDay={data} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
