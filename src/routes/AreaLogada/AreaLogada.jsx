import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Locate } from '../../components/Locate/Locate'
import { ContainerSections } from './AreaLogada-styles'

export function AreaLogada() {
  return (
    <>
      <Header />
      <ContainerSections>
        <Locate />
      </ContainerSections>
      <Footer />
    </>
  )
}
