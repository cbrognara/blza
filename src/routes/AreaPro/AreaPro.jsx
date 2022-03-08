import React from 'react'
import { Header } from '../../components/Header/Header'

// Dados da aplicação
import { proInfo, calendar } from '../../components/Data/Data'
import { Container } from './AreaPro-styles'
import { CarouselCalendar } from '../../components/CarouselCalendar/CarouselCalendar'
import { ContainerSections } from '../AreaLogada/AreaLogada-styles'

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
