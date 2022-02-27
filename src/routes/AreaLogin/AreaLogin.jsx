import React from 'react'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import {
  Container,
  ContainerLogin,
  EsqueciSenha,
  P,
  Title
} from './AreaLogin-styles'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

export function AreaLogin() {
  // function handleSubmit(event) {
  //   event.preventDefault()
  // }

  return (
    <Container>
      <ContainerLogin>
        <div className="logoBig">
          <Logo />
        </div>
        <Title>Entre com Sua Conta</Title>
        <form>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="senha" />
          <EsqueciSenha href="/">Esqueci minha senha</EsqueciSenha>
          <Button color="primary" icon="arrow-right">
            Entrar
          </Button>
          <P>Ou</P>
          <Button color="secondary">Cadastrar-se</Button>
        </form>
      </ContainerLogin>
    </Container>
  )
}
