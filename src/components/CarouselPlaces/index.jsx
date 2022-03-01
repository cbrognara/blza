import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import CardPlace from '../../components/CardPlace/CardPlace'

function CarouselPlaces({ data }) {
  return (
    <Container>
      <Swiper
        spaceBetween={12}
        slidesPerView={3.6}
        mousewheel={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 0
          },
          560: {
            slidesPerView: 1.8,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          960: {
            slidesPerView: 3.5,
            spaceBetween: 16
          }
        }}
      >
        {data.map(data => {
          return (
            <SwiperSlide>
              <CardPlace
                placeImage={data.placeImage}
                localName={data.localName}
                address={data.address}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default CarouselPlaces
