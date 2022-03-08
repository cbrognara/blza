import React from 'react'

// Components
import { Header } from '../../components/Header/Header'
import { CarouselCalendar } from '../../components/CarouselCalendar/CarouselCalendar'

// Dados da aplicação
import { proInfo, calendar } from '../../components/Data/Data'

// Styled components
import { Container } from './AreaPro-styles'

export default function AreaPro() {
  return (
    <>
      <Header userData={proInfo} />

      <Container>
        <CarouselCalendar data={calendar}></CarouselCalendar>
      </Container>
    </>
  )
}
