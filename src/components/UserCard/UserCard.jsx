import React from 'react'
import { Container } from './UserCard-styles'

export function UserCard({ name, data }) {
  return (
    <Container>
      <a href="/">
        <img src="" alt="sua foto" />
      </a>
      <div>
        <h2>Name</h2>
        <div>Star Level</div>
      </div>
      <a href="/">Sair</a>
    </Container>
  )
}
