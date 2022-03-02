import React from 'react'
import { Container } from './LoggedUser-styles'
import { Star } from 'phosphor-react'

export function LoggedUser({ data }) {
  console.log(data)
  function clientType() {
    if (data.type === 'client') {
      return (
        <span>
          {data.starCount ? data.starCount : '0'} Stars{' '}
          <Star weight="fill" size="1.6rem" />
        </span>
      )
    }
  }

  return (
    <Container>
      <img src={data.profileImage} alt="sua foto" />
      <div className="text">
        <p>{data.name}</p>
        {clientType()}
      </div>
      <button type="button">Sair</button>
    </Container>
  )
}
