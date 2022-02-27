import styled from 'styled-components'

import BackgroundLogin from '../../assets/images/background-login.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--primary-light-200);
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  background-image: url(${BackgroundLogin});
  background-size: cover;

  @media (max-width: 667px) {
    justify-content: center;
  }
`

export const ContainerLogin = styled.div`
  padding: 8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 48rem;
  max-height: 69rem;
  background: white;
  margin-right: 8rem;

  .logoBig svg {
    width: 15rem;
    height: 100%;
    margin-bottom: 8rem;
  }

  @media (max-width: 667px) {
    margin: 0;
    padding: 6.4rem 2.4rem;
  }
`

export const Title = styled.h2`
  font-size: 2.4rem;
  width: 100%;
`

export const EsqueciSenha = styled.a`
  display: flex;
  justify-content: end;
  font-size: 1.8rem;
  color: var(--primary-light-500);
  &:hover {
    filter: brightness(0.8);
  }
`

export const P = styled.p`
  color: var(--primary-light-500);
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
`
