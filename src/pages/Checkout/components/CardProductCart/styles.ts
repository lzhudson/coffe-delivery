import styled from 'styled-components'

export const CardProductCartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 4px;

  strong {
    color: ${(props) => props.theme.colors['base-text']};
    @media (max-width: 1024px) {
      font-size: ${(props) => props.theme.pixelToRem(14)};
      line-height: 200%;
    }
  }
`

export const CardProductCartInfo = styled.div`
  display: flex;
  flex-basis: 255px;
  gap: 1.25rem;
  align-items: center;
  > img {
    width: 64px;
    height: 64px;
  }
  h5 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-weight: 400;
    font-size: 1rem;
  }
`

export const CardProductCartDetails = styled.div``

export const CardProductCartActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const ButtonRemoveFromCart = styled.button`
  padding: 8px;
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  border: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }
  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
