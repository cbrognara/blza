import React from 'react'
import {
  BookContent,
  Container,
  DateContent,
  LocalArea,
  LocalContent
} from './CardBook-styles'
import { MapPinLine } from 'phosphor-react'

export function CardBook({ service, profissionalImage, localName, address }) {
  return (
    <Container>
      <div>
        <h3>Coloração</h3>
        <LocalArea>
          <LocalContent>
            <MapPinLine weight="duotone" size="3rem" />
            <div>
              <p>MegaCulture</p>
              <a href="/">Av. Rio das Pedras, 1118 Aricanduva</a>
            </div>
          </LocalContent>
        </LocalArea>
        <img
          src="../../assets/images/pro-image.png"
          alt="foto do profissional escolhido"
        />
      </div>
      <BookContent>
        <button>AGENDADO</button>
        <a href="/">Ver no Maps</a>
      </BookContent>
      <DateContent>
        <h3>31</h3>
        <p>Fevereiro</p>
        <span>18:20</span>
      </DateContent>
    </Container>
  )
}
