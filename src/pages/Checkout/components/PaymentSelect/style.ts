import styled from 'styled-components'

export const PaymentSelectContainer = styled.div`
  margin-top: 12px;
`

export const PaymentSelectHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
  div {
    h5 {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
    p {
      margin-top: ${(props) => props.theme.pixelToRem(2)};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`

export const PaymentOptionsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: ${(props) => props.theme.pixelToRem(12)};
  @media (max-width: 620px) {
    flex-direction: column;
  }
`

export const RadioContainer = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked ~ label {
    background-color: ${(props) => props.theme.colors['purple-light']};
    border-color: ${(props) => props.theme.colors.purple};
  }
  label {
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    gap: ${(props) => props.theme.pixelToRem(12)};
    padding: 1rem;
    font-size: ${(props) => props.theme.pixelToRem(12)};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors['base-text']};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: ${(props) => props.theme.colors['base-hover']};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`
