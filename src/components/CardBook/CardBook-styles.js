import styled from 'styled-components'

export const Container = styled.div`
  width: 68rem;
  height: 18rem;
  background: #ffffff;
  margin: 3.6rem auto 3.6rem 8.4rem;
  padding: 1.6rem;
  display: flex;

  .link-button {
    color: var(--primary-light-500);
    font-size: 1.6rem;
    width: 9.6rem;
  }
  @media (max-width: 1090px) {
    flex-direction: column-reverse;
    max-width: 32rem;
    height: 27.2rem;
    margin: 0;
  }
`

export const Row = styled.div`
  display: flex;
  padding: 0.8rem 0;
  align-items: center;
  width: 100%;
  flex-grow: 1;

  h3 {
    flex-grow: 2;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
  flex-grow: 1;
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
    font-weight: 700;
  }

  @media (max-width: 1090px) {
    flex-direction: row;
    align-self: center;

    h3,
    p,
    span {
      font-size: 2.4rem;
    }
  }
`

export const Status = styled.div`
  color: #ffffff;
  background: var(--primary-light-500);
  border-radius: 1.6rem;
  width: 8.4rem;
  height: 2.4rem;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
`

export const AddressContent = styled.a`
  color: var(--secondary-500);
  font-weight: 400;
  font-size: 1.4rem;
`

export const ProChip = styled.a`
  width: 14.2rem;
  height: 4rem;
  background: var(--primary-light-100);
  border: 1px solid var(--primary-light-300);
  box-sizing: border-box;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  .proImage {
    height: 4rem;
    width: 4rem;
    background-color: var(--primary-light-300);
    border-radius: 4rem;

    background-image: ${props => `url(${props.imgUrl})`};
    background-size: cover;
  }

  span {
    font-size: 1.6rem;
    color: var(--secondary-500);
    font-weight: 600;
  }
`
