import React from 'react'
import { Container } from './Input-styles'

export function Input({ type, id, value, placeholder }) {
  return (
    <Container>
      <input type={type} id={id} placeholder={placeholder} />
    </Container>
  )
}
