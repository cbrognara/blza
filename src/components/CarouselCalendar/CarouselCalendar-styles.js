import styled from 'styled-components'

export const ContainerData = styled.div`
  font-size: 1.6rem;
  color: ${props =>
    props.isToday === true ? '#FFFFFF' : `var(--secondary-400)`};
  background: ${props =>
    props.isToday === true ? `var(--secondary-400)` : `var(--secondary-300)`};
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  padding: 0.8rem;
  margin-bottom: 2.4rem;
  width: 33rem;

  span {
    font-weight: 700;
  }

  @media (max-width: 800px) {
    width: 26rem;
  }
`
