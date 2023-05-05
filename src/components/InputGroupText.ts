import styled from 'styled-components'

export const InputGroupText = styled.span`
  border-radius: 4px;
  color: ${(props) => props.theme.colors['base-label']};
  font-size: ${(props) => props.theme.pixelToRem(12)};
  font-style: italic;
  font-weight: 400;
  margin-right: ${(props) => props.theme.pixelToRem(13.12)};
`
