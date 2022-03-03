import React from 'react'
import {
  AddressContent,
  Column,
  Container,
  DateContent,
  ProChip,
  Row,
  Status
} from './CardBook-styles'
import { MapPinLine } from 'phosphor-react'

export function CardBook({ service, proImage, localName, address }) {
  return (
    <Container>
      <Column>
        <Row>
          <h3>Coloração</h3>
          <Status>AGENDADO</Status>
        </Row>
        <Row>
          <MapPinLine weight="fill" size="3rem" />
          <Column>
            <h4>MegaCulture</h4>
            <AddressContent href="/">
              Av. Rio das Pedras, 1118 Aricanduva
            </AddressContent>
          </Column>
          <a href="/" className="link-button">
            Ver no Maps
          </a>
        </Row>
        <Row>
          <ProChip imgUrl={proImage}>
            <div className="proImage"></div>
            <span>Jonathan</span>
          </ProChip>
        </Row>
      </Column>
      <DateContent>
        <h3>31</h3>
        <p>Fevereiro</p>
        <span>18:20</span>
      </DateContent>
    </Container>
  )
}
