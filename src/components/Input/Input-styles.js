import styled from 'styled-components'

export const Container = styled.div`
  input {
    width: 100%;
    height: 6rem;
    border-radius: 1px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1.6rem;
    border: 1px solid var(--primary-light-200);
    color: var(--secondary-500);

    &[type='password'] {
      font-size: 2.5rem;
    }

    &:focus {
      outline: 1px solid var(--primary-light-300);
      border: 1px solid var(--primary-light-300);
    }

    &::placeholder {
      color: var(--neutral-light-500);
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`
