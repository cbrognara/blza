import React from 'react'
import { MapPinLine, Clock } from 'phosphor-react'

import {
  ClientChip,
  Column,
  Container,
  Row
} from '../../components/BookTime/BookTime-styles'

export default function BookTime({ data }) {
  return (
    <Container>
      <Row className="time-row">
        <Clock size="1.6rem" />
        <span>{data.hour}</span>
        <h3>{data.service}</h3>
      </Row>
      <Row>
        <MapPinLine weight="fill" size="1.6rem" />
        <Column>
          <h4>{data.localName}</h4>
          <p>{data.address}</p>
        </Column>
      </Row>
      <Row>
        <ClientChip imgUrl={data.client.imageUrl}>
          <div className="clientImage"></div>
          <span>{data.client.name}</span>
        </ClientChip>
      </Row>
    </Container>
  )
}
