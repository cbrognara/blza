import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Locate } from '../../components/Locate/Locate'
import { ContainerSections, FavoriteSection } from './AreaLogada-styles'

// Component carousel
import CarouselPlaces from '../../components/CarouselPlaces/CarouselPlaces'
import { CarouselBook } from '../../components/CarouselBook/CarouselBook'

// Dados da aplicação
import { listPlaces, listBook, clientInfo } from '../../components/Data/Data'

export function AreaLogada() {
  return (
    <>
      <Header userData={clientInfo} />

      <ContainerSections>
        <FavoriteSection>
          <div className="title">
            <h1>Suas Reservas</h1>
            <a href="/">Ver todas</a>
          </div>
          <CarouselBook data={listBook} />
        </FavoriteSection>

        <FavoriteSection>
          <div className="title">
            <h1>Disponíveis para hoje</h1>
            <a href="/">Ver todos</a>
          </div>
          <CarouselPlaces data={listPlaces} />
        </FavoriteSection>

        <Locate />

        <FavoriteSection>
          <div className="title">
            <h1>Visitados e Favoritos</h1>
            <a href="/">Ver todos</a>
          </div>
          <CarouselPlaces data={listPlaces} />
        </FavoriteSection>
      </ContainerSections>
      <Footer />
    </>
  )
}
