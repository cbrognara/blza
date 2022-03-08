import React, { useState } from 'react'
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
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleEmail(event) {
    setEmail(event.target.value)
    console.log(event.target.value)
  }

  function handleSenha(event) {
    setSenha(event.target.value)
    console.log(event.target.value)
  }

  return (
    <Container>
      <ContainerLogin>
        <div className="logoBig">
          <Logo />
        </div>
        <Title>Entre com Sua Conta</Title>
        <form>
          <Input
            type="email"
            placeholder="@email.com"
            value={email}
            onChange={handleEmail}
          />
          <Input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={handleSenha}
          />
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
