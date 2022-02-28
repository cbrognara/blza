import styled from 'styled-components'

export const Container = styled.div`
  width: 26rem;
  height: 28rem;

  .place-image {
    width: 100%;
    height: 12rem;
  }

  button {
    color: var(--primary-light-500);
    width: 23rem;
    font-size: 1.6rem;
    padding: 1.6rem;
    margin: 0 1.6rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;

    &:hover {
      background: var(--primary-light-300);
    }
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 2rem;

  h3 {
    color: var(--secondary-500);
    font-weight: 700;
    font-size: 1.8rem;
  }

  svg {
    color: var(--primary-light-500);
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.6rem;

  a {
    color: var(--secondary-500);
    font-weight: 400;
    font-size: 1.4rem;
  }

  svg {
    color: var(--secondary-500);
  }
`
