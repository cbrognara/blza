import React from 'react'
import CardPlace from '../../components/CardPlace/CardPlace'
import Footer from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Locate } from '../../components/Locate/Locate'
import {
  CardSection,
  ContainerSections,
  FavoriteSection
} from './AreaLogada-styles'

import { CardBook } from '../../components/CardBook/CardBook'
import CarouselPlaces from '../../components/CarouselPlaces'

const listPlaces = [
  {
    placeImage:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://blog.beautyclass.tv/wp-content/uploads/2019/05/Decora%C3%A7%C3%A3o-de-sal%C3%A3o-de-beleza-dicas-e-ideias-para-n%C3%A3o-errar-768x469.jpg',
    localName: 'MegaCulture',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  },

  {
    placeImage:
      'https://cdn1.mundodastribos.com/58775-Fotos-de-Sal%C3%A3o-de-Beleza-Decorados-20.jpg',
    localName: 'MegaHair',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  },

  {
    placeImage:
      'https://fotos.vivadecora.com.br/decoracao-salao-de-beleza-piso-de-porcelanato-claro-e-cadeira-de-couro-preta-revistavd-187516-proportional-height_cover_medium.jpg',
    localName: 'Beauty Style',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  },

  {
    placeImage:
      'https://blogdecoracao.biz/wp-content/uploads/2014/11/decora%C3%A7%C3%A3o-de-sal%C3%A3o.jpg',
    localName: 'Estetica Hair',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  },

  {
    placeImage:
      'https://construindodecor.com.br/wp-content/uploads/2019/01/Decoracao-de-Salao-de-Beleza-Simples-e-Barata-4.jpg',
    localName: 'Edson Silveira Salão',
    address: 'Av. Rio das Pedras, 1118 Aricanduva'
  }
]

export function AreaLogada() {
  return (
    <>
      <Header />

      <ContainerSections>
        <FavoriteSection>
          <div className="title">
            <h1>Suas Reservas</h1>
            <a href="/">Ver todas</a>
          </div>
          <CardBook />
        </FavoriteSection>

        <Locate />

        <FavoriteSection>
          <div className="title">
            <h1>Visitados e Favoritos</h1>
            <a href="/">Ver todos</a>
          </div>
          <CardSection>
            <CarouselPlaces data={listPlaces} />

            {/* <Carousel
              className="carousel"
              show={3.5}
              swiping={true}
              transition={0.5}
              infinite={false}
              responsive={true}
            >
              {listPlaces.map(data => {
                return (
                  <CardPlace
                    placeImage={data.placeImage}
                    localName={data.localName}
                    address={data.address}
                  />
                )
              })}
            </Carousel> */}
          </CardSection>
        </FavoriteSection>
      </ContainerSections>
      <Footer />
    </>
  )
}
