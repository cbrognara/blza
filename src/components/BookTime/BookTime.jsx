import React, { useState } from 'react'
import {
  Clock,
  X,
  Calendar,
  ArrowClockwise,
  Phone,
  Envelope,
  MapPin
} from 'phosphor-react'

import {
  ClientChip,
  ClientInfo,
  Column,
  Container,
  InnerModal,
  Row
} from '../../components/BookTime/BookTime-styles'
import ReactModal from 'react-modal'

export default function BookTime({ data }) {
  const [modal, setModal] = useState(false)

  function handleOpenModal() {
    setModal(true)
    console.log(modal)
  }

  function handleCloseModal() {
    setModal(false)
    console.log(modal)
  }

  return (
    <>
      <Container isCurrent={data.isCurrent}>
        <div className="btn" onClick={handleOpenModal}>
          <Row className="time-row">
            <span>
              <Clock size="1.6rem" />
              {data.hour}
            </span>
            <h3>{data.service}</h3>
          </Row>
          <Row>
            <MapPin weight="fill" size="1.6rem" />
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
        </div>
        {/* Modal com dados do cliente */}
        <ReactModal
          isOpen={modal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
        >
          <InnerModal>
            <button className="close-modal" onClick={handleCloseModal}>
              <X size="2.4rem" />
            </button>

            <Row className="day-time">
              <span>
                <Clock size="2.4rem" />
                <b>{data.hour}</b>
              </span>

              <span>
                <Calendar weight="duotone" size="2.4rem" />
                <b>{data.day}</b>
                {data.month}
              </span>
            </Row>

            <Row className="service">
              <h3>{data.service}</h3>
            </Row>

            <Row>
              <ClientInfo imgUrl={data.client.imageUrl}>
                <Row>
                  <div className="clientImage"></div>
                  <span className="clientName">
                    {data.client.name} {data.client.lastName}
                  </span>
                </Row>
                <Row className="clientContacts">
                  <span>
                    <ArrowClockwise weight="duotone" size="2.4rem" />
                    {data.client.recurrence}
                  </span>

                  <span>
                    <Phone weight="duotone" size="2.4rem" />
                    {data.client.phone}
                  </span>

                  <span>
                    <Envelope weight="duotone" size="2.4rem" />
                    {data.client.email}
                  </span>
                </Row>
              </ClientInfo>
            </Row>

            <Row className="placeInfo">
              <MapPin weight="fill" size="2.4rem" />
              <Column>
                <h4>{data.localName}</h4>
                <p>{data.address}</p>
              </Column>
            </Row>
          </InnerModal>
        </ReactModal>
      </Container>
    </>
  )
}
