import styled from 'styled-components'

export const FormGroup = styled.div`
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;
  display: flex;
  align-items: center;
`
