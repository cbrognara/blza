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

  &:hover {
    background: var(--primary-light-200);
  }

  .btn {
    cursor: pointer;
  }

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
    padding-left: 1.6rem;
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

  @media (max-width: 800px) {
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

  .service {
    h3 {
      padding-top: 2.4rem;
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

export const ClientInfo = styled.div`
  background: var(--secondary-200);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  color: var(--secondary-500);

  .clientName {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .clientImage {
    height: 4rem;
    width: 4rem;
    background-color: var(--primary-light-300);
    border-radius: 4rem;

    background-image: ${props => `url(${props.imgUrl})`};
    background-size: cover;
    background-position: center;
    margin-right: 1.6rem;
  }

  .clientContacts {
    gap: 1.6rem;

    span {
      font-size: 1.4rem;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

export const InnerModal = styled.div`
  .day-time {
    span {
      font-size: 2rem;
      line-height: 2.4rem;
      display: flex;
      align-items: center;
      padding-right: 4rem;
      gap: 0.8rem;

      @media (max-width: 800px) {
        font-size: 1.4rem;
        gap: 0.4rem;
        padding-right: 2rem;
      }
    }
  }

  .placeInfo {
    gap: 0.8rem;
    font-size: 1.4rem;
    color: var(--secondary-500);

    h4 {
      font-weight: bold;
    }

    svg {
      color: var(--secondary-400);
    }
  }
`
