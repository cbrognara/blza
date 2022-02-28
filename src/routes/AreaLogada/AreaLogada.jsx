import React from 'react'
import CardPlace from '../../components/CardPlace/CardPlace'
import Footer from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Locate } from '../../components/Locate/Locate'
import { ContainerSections, FavoriteSection } from './AreaLogada-styles'

import PlaceImage from '../../assets/images/place-image.png'
import { Carousel } from '@trendyol-js/react-carousel'

// const listCards = []

// {listCards.map((card) => {
//   <CardPlace
//   placeImage={PlaceImage}
//   localName="MegaCulture"
//   locate="Av. Rio das Pedras, 1118 Aricanduva"
// />
//  })}

export function AreaLogada() {
  return (
    <>
      <Header />
      <ContainerSections>
        <Locate />
        <FavoriteSection>
          <div className="title">
            <h1>Visitados e Favoritos</h1>
            <a href="/">Ver todos</a>
          </div>
          <Carousel show={3.5} slide={3} swiping={true} transition={0.5}>
            <CardPlace
              placeImage={PlaceImage}
              localName="MegaCulture"
              locate="Av. Rio das Pedras, 1118 Aricanduva"
            />
            <CardPlace
              placeImage={PlaceImage}
              localName="MegaCulture"
              locate="Av. Rio das Pedras, 1118 Aricanduva"
            />
            <CardPlace
              placeImage={PlaceImage}
              localName="MegaCulture"
              locate="Av. Rio das Pedras, 1118 Aricanduva"
            />
            <CardPlace
              placeImage={PlaceImage}
              localName="MegaCulture"
              locate="Av. Rio das Pedras, 1118 Aricanduva"
            />
            <CardPlace
              placeImage={PlaceImage}
              localName="MegaCulture"
              locate="Av. Rio das Pedras, 1118 Aricanduva"
            />
          </Carousel>
        </FavoriteSection>
      </ContainerSections>
      <Footer />
    </>
  )
}
