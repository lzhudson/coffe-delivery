import styled from 'styled-components'

export const TagsListContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.25rem;

  li {
    background-color: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 100px;
    padding: 4px 8px;
    font-weight: 700;
    font-size: ${(props) => props.theme.pixelToRem(10)};
    color: ${(props) => props.theme.colors['yellow-dark']};
    text-transform: uppercase;
  }
`
