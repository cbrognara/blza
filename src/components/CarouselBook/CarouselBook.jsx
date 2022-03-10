import { Container } from './Carousel-styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { CardBook } from '../CardBook/CardBook'

export function CarouselBook({ data }) {
  return (
    <Container>
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        mousewheel={true}
        breakpoints={{
          320: {
            slidesPerView: 1.15,
            spaceBetween: 8
          },

          420: {
            slidesPerView: 1.2,
            spaceBetween: 8
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 8
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 8
          },
          1090: {
            slidesPerView: 3,
            spaceBetween: 8
          }
        }}
      >
        {data.map(item => {
          return (
            <SwiperSlide>
              <CardBook data={item} proImage={item.bookInfo.pro.image} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}
