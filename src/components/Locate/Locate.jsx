import React from 'react'
import { Button } from '../Button/Button'

import { MapPinLine } from 'phosphor-react'
import { Container } from './Locate-styles'

export function Locate() {
  return (
    <Container>
      <h2>Próximo de Você</h2>
      <div className="inner">
        <MapPinLine weight="duotone" size="4rem" />
        <p>Ative sua localização para ver locais próximos de você.</p>
        <Button color="secondary">Me Localize</Button>
      </div>
    </Container>
  )
}
