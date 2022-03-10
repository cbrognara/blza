import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: calc(100vw - 8rem);
  margin: 11.2rem auto;

  .calendar {
    &:first-child {
      padding-left: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 100vw;
    padding-top: 12rem;
    padding-bottom: 9.6rem;
  }
`
