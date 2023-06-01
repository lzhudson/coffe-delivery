import styled from 'styled-components'

export const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 12px;
  width: 100%;
  color: ${(props) => props.theme.colors['base-text']};
  transition: all 0.2s;
  border-radius: 4px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const InputRoot = styled.div`
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;
  display: flex;
  align-items: center;
`
