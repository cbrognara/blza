import React from 'react'
import { Container, Content } from './Header-styles'
import { LoggedUser } from '../LoggedUser/LoggedUser'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import UserPicture from '../../assets/images/perfil-image.png'

export function Header() {
  return (
    <Container>
      <Content>
        <a href="/">
          <Logo />
        </a>
        <LoggedUser starCount="450" perfilImage={UserPicture} />
      </Content>
    </Container>
  )
}
