import React from 'react'
import { Container, Content } from './Header-styles'
import { LoggedUser } from '../LoggedUser/LoggedUser'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

export function Header({ userData }) {
  return (
    <Container>
      <Content>
        <a href="/">
          <Logo />
        </a>
        <LoggedUser data={userData} />
      </Content>
    </Container>
  )
}
