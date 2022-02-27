import React from 'react'
import { Container, Content } from './Header-styles'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { BrowserRouter } from 'react-router-dom'
import { UserCard } from '../UserCard/UserCard'

export function Header() {
  return (
    <Container>
      <Content>
        <BrowserRouter>
          <a href="/">
            <Logo />
          </a>
          <UserCard />
        </BrowserRouter>
      </Content>
    </Container>
  )
}
