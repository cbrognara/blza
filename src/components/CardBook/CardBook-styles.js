import styled from 'styled-components'

export const Container = styled.div`
  max-width: 68rem;
  height: 18rem;
  background: #ffffff;
  margin: 3.6rem auto 3.6rem 8.4rem;
  padding: 2.4rem;
  display: flex;
`

export const LocalArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 22rem;
  margin: 1.6rem;

  a {
    color: var(--secondary-500);
    font-weight: 400;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--secondary-500);
  }

  svg {
    color: var(--secondary-500);
  }
`

export const LocalContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const BookContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    color: #ffffff;
    background: var(--primary-light-500);
    border-radius: 1.6rem;
    width: 8.4rem;
    height: 2.4rem;
    font-size: 1.2rem;
  }

  a {
    color: var(--primary-light-500);
    font-size: 1.6rem;
    margin: 2.6rem 4.2rem;
  }
`
export const DateContent = styled.div`
  color: var(--secondary-500);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1.6rem;

  h3 {
    font-size: 3.2rem;
  }

  p {
    font-size: 1.6rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`
