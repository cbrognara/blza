import React from 'react'
import { Container } from './LoggedUser-styles'
import { Star } from 'phosphor-react'

export function LoggedUser({
  name,
  data,
  handleLogout,
  starCount,
  perfilImage
}) {
  return (
    <Container>
      <img src={perfilImage} alt="sua foto" />
      <div className="text">
        <p>Candice J. B.</p>
        <span>
          {starCount ? starCount : '0'} Stars{' '}
          <Star weight="fill" size="1.6rem" />
        </span>
      </div>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  )
}
