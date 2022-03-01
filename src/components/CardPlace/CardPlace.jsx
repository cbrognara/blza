import React from 'react'

import { Container, Img, Location, Title } from './CardPlace-styles'

import { MapPinLine, Star, Calendar } from 'phosphor-react'

export default function CardPlace({ placeImage, localName, address }) {
  return (
    <Container>
      <Img imgURL={placeImage} alt="foto do local indicado" />
      <Title>
        <h3>{localName}</h3>
        <Star weight="fill" size="1.6rem" />
      </Title>
      <Location>
        <MapPinLine weight="duotone" size="3rem" />
        <a href="/">{address}</a>
      </Location>
      <button>
        Novo Agendamento
        <Calendar size="2rem" />
      </button>
    </Container>
  )
}
