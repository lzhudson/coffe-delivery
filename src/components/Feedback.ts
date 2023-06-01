import styled from 'styled-components'

export const Feedback = styled.p`
  color: ${(props) => props.theme.colors.danger};
  font-size: ${(props) => props.theme.pixelToRem(14)};
  margin-top: 0.25rem;
`
