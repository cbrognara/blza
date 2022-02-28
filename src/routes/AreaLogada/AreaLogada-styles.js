import styled from 'styled-components'

export const ContainerSections = styled.div`
  max-width: 1152px;
  position: relative;
  margin: 4rem 0;
  padding: 2rem 2rem;
`
export const FavoriteSection = styled.div`
  background: var(--primary-light-100);

  .title {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 3.2rem;
    padding: 4rem 2rem;
  }

  a {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--primary-light-500);
  }
`
