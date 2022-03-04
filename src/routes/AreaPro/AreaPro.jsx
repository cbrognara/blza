import React from 'react'
import { Header } from '../../components/Header/Header'

// Dados da aplicação
import { proInfo, calendar } from '../../components/Data/Data'
import { Container } from './AreaPro-styles'
import { CarouselCalendar } from '../../components/CarouselCalendar/CarouselCalendar'

export default function AreaPro() {
  return (
    <Container>
      <Header userData={proInfo} />

      <CarouselCalendar data={calendar}></CarouselCalendar>
    </Container>
  )
}
