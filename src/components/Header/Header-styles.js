import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  min-height: 7.2rem;
  background: var(--primary-light-200);
  position: fixed;
  top: 0;
  z-index: 1;
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;
  justify-content: space-between;

  a svg {
    height: 4.8rem;
    width: 100%;
    padding-left: 8rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 0;

    a svg {
      height: 3.2rem;
      padding: 0;
      margin: 0.8rem;
      width: 8.8rem;
    }
  }
`
