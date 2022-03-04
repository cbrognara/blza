import styled from 'styled-components'

export const Container = styled.div`
  width: 33rem;
  height: 16rem;
  color: var(--secondary-500);
  padding: 1.6rem;
  margin-bottom: 2rem;
  background: var(--primary-light-100);
  border: ${props =>
    props.isCurrent === true ? `2px solid var(--primary-light-500)` : 'none'};

  span {
    font-size: 1.6rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    border-radius: 1.6rem;
    background: #ffffff;
    padding: 0.4rem 0.8rem;
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

  svg {
    margin-right: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 26rem;
    height: 20rem;
    padding: 1.2rem;

    .time-row {
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  padding: 0.4rem;
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
