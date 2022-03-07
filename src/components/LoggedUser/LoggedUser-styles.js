import styled from 'styled-components'

export const Container = styled.div`
  width: 38rem;
  height: 100%;
  background: var(--secondary-500);
  color: var(--secondary-300);
  display: flex;
  align-items: ${props => (props.starCount ? '' : 'center')};

  button {
    padding: 2.4rem 1.6rem;
    background: var(--secondary-500);
    color: var(--secondary-300);
    font-weight: 600;
    cursor: pointer;
    transition: background 200ms ease;

    &:hover {
      background: var(--secondary-400);
    }

    @media (max-width: 800px) {
      padding: 0.8rem 1.6rem;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 5rem;
  }

  .text {
    padding: 0.8rem 3.2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 2;

    p {
      font-weight: 700;
      line-height: 3.2rem;
      font-size: 1.4rem;
    }
    span {
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;

      svg {
        color: var(--primary-light-500);
      }
    }

    @media (max-width: 800px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0.8rem 1.6rem;
    }
  }
`

export const ContainerImage = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  background-image: ${props => `url(${props.profileImage})`};
`
