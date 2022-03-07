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
