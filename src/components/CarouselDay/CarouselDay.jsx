import React from 'react'

import BookTime from '../BookTime/BookTime'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Container } from './CarouselDay-styles'

export function CarouselDay({ dataDay }) {
  return (
    <Container>
      <Swiper
        spaceBetween={2}
        slidesPerView={3.5}
        direction={'vertical'}
        mousewheel={true}
        breakpoints={{
          320: {
            slidesPerView: 2.3,
            spaceBetween: 2
          },

          620: {
            slidesPerView: 2.4,
            spaceBetween: 2
          },

          768: {
            slidesPerView: 2.8,
            spaceBetween: 2
          },

          820: {
            slidesPerView: 3.8,
            spaceBetween: 2
          },
          1024: {
            slidesPerView: 2.8,
            spaceBetween: 2
          }
        }}
      >
        {dataDay.times.map(bookItem => {
          return (
            <SwiperSlide>
              <BookTime data={bookItem} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}
