import styled from 'styled-components'

export const CoffeeSectionContainer = styled.section`
  padding-bottom: ${(props) => props.theme.pixelToRem(157)};
  .container {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    @media (max-width: 1024px) {
      padding: 0 0.75rem;
    }
  }
  h1 {
    font-family: ${(props) => props.theme.fonts.baloo};
    font-size: 2rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
export const CoffesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: ${(props) => props.theme.pixelToRem(40)};
  margin-top: ${(props) => props.theme.pixelToRem(34)};
  list-style: none;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CoffeListItem = styled.li``
