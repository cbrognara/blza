import styled from 'styled-components'

export const Btn = styled.button`
  color: ${props => theme[props.color].text};
  min-width: 31rem;
  width: ${props => (props.width ? props.width : '100%')};
  height: 5.6rem;
  cursor: pointer;
  line-height: 2.4rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.icon ? 'space-between' : 'center')};
  padding: 1.6rem;
  border-radius: 1px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  background: ${props => theme[props.color].default};

  &:hover {
    filter: ${props => theme[props.color].hover};
  }

  &:active {
    background: ${props => theme[props.color].pressed};
  }

  &:disabled {
    background: ${props => theme[props.color].disabled};
    color: #ffffff;
    cursor: not-allowed;
  }
`

const theme = {
  primary: {
    default: 'var(--primary-light-500)',
    text: 'var(--primary-light-text)',
    hover: 'brightness(0.8)',
    disabled: 'var(--primary-light-300)',
    pressed: 'var(--primary-light-300)'
  },
  secondary: {
    default: 'var(--secondary-300)',
    text: 'var(--secondary-text)',
    hover: 'brightness(0.8)',
    disabled: 'var(--neutral-light-300)',
    pressed: 'var(--neutral-light-600)'
  }
}

Btn.defaultProps = {
  color: 'primary'
}
