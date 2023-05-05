import styled from 'styled-components'

export const InputContainer = styled.input`
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
