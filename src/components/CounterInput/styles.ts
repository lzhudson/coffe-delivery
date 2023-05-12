import styled from 'styled-components'
export const CounterInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 4px 8px;
  border-radius: 6px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    width: 14px;
    height: 14px;
    cursor: pointer;
    svg {
      color: ${(props) => props.theme.colors.purple};
    }
    &:hover svg {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  input[type='number'] {
    width: 20px;
    height: 21px;
    background-color: transparent;
    border: none;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    appearance: textfield;
  }
`
