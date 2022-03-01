import styled from 'styled-components'

export const Container = styled.div`
  width: 26rem;
  height: 30rem;
  background: #ffffff;

  button {
    color: var(--primary-light-500);
    background: #ffffff;
    width: 23rem;
    font-size: 1.6rem;
    padding: 1.6rem;
    display: flex;
    align-content: center;
    margin: 0rem 1.6rem;
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
export const Img = styled.div`
  width: 100%;
  min-width: 26rem;
  height: 12rem;
  background-color: var(--primary-light-300);
  background-image: ${props => `url(${props.imgURL})`};
  background-size: cover;
`
