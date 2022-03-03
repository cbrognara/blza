import styled from 'styled-components'

export const Container = styled.div`
  width: 33rem;
  height: 16rem;
  color: var(--secondary-500);
  padding: 1.6rem;
  background: var(--primary-light-100);
  border: 2px solid black;
  justify-content: space-around;

  span {
    font-size: 1.6rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.6rem;
    width: 100%;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    width: 100%;
  }

  p {
    font-size: 1.2rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 26rem;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  padding: 0.4rem;

  .time-row {
    @media (max-width: 768px) {
      gap: 1rem;
    }
  }
`
export const Column = styled.div`
  width: 2.6rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const ClientChip = styled.a`
  width: 14.2rem;
  height: 4rem;
  background: var(--primary-light-100);
  border: 1px solid var(--primary-light-300);
  box-sizing: border-box;
  border-radius: 4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  .clientImage {
    height: 4rem;
    width: 4rem;
    background-color: var(--primary-light-300);
    border-radius: 4rem;

    background-image: ${props => `url(${props.imgUrl})`};
    background-size: cover;
    background-position: center;
  }
`
