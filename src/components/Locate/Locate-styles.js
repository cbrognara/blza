import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--secondary-500);
  margin-top: 10rem;
  margin-bottom: 8rem;
  padding: 0 2.4rem;

  h2 {
    width: 100%;
    text-align: left;
  }

  .inner {
    max-width: 64rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2.4rem;
    gap: 1.6rem;

    p {
      max-width: 36rem;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
`
