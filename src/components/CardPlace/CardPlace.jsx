import React from 'react'

import { Container, Location, Title } from './CardPlace-styles'

import { MapPinLine, Star, Calendar } from 'phosphor-react'

export default function CardPlace({ placeImage, localName, locate }) {
  return (
    <Container>
      <img src={placeImage} alt="foto do local indicado" />
      <Title>
        <h3>{localName}</h3>
        <Star weight="fill" size="1.6rem" />
      </Title>
      <Location>
        <MapPinLine weight="duotone" size="3rem" />
        <a href="/">{locate}</a>
      </Location>
      <button>
        Novo Agendamento
        <Calendar size="2rem" />
      </button>
    </Container>
  )
}
