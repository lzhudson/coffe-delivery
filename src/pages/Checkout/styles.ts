import styled from 'styled-components'

export const CheckoutSection = styled.section`
  margin-top: ${(props) => props.theme.pixelToRem(40)};
  @media (max-width: 1024px) {
    margin-top: ${(props) => props.theme.pixelToRem(20)};
  }
`

export const CheckoutSectionContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0.75rem;
`

export const CheckoutContent = styled.form`
  display: grid;
  grid-template-columns: 640px 448px;
  column-gap: 24px;
  h4 {
    font-family: ${(props) => props.theme.fonts.baloo};
    font-size: ${(props) => props.theme.pixelToRem(18)};
    font-weight: 700;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: ${(props) => props.theme.pixelToRem(15)};
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const AddressContent = styled.div`
  > div {
    padding: 40px;
    background-color: ${(props) => props.theme.colors['base-card']};
    border-radius: 6px;
    @media (max-width: 1024px) {
      padding: 20px;
    }
  }
`

export const AddressContentHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
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

export const Cart = styled.div`
  h4 {
    font-family: ${(props) => props.theme.fonts.baloo};
    font-size: ${(props) => props.theme.pixelToRem(18)};
    font-weight: 700;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: ${(props) => props.theme.pixelToRem(15)};
  }
  @media (max-width: 1024px) {
    margin-top: 1rem;
    padding-bottom: 2rem;
  }
`

export const CartContainer = styled.div`
  margin-top: ${(props) => props.theme.pixelToRem(15)};
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px;
  padding: 40px;
  @media (max-width: 1024px) {
    padding: 20px;
  }

  .empty-cart-message {
    font-weight: 700;
    text-align: center;
  }
`

export const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const ProductItem = styled.li`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  & + & {
    margin-top: 1.5rem;
  }
`

export const PurchaseButton = styled.button`
  padding: 15px 8px;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 6px;
  margin-top: 1.5rem;
  border: none;
  width: 100%;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  text-transform: uppercase;
  font-stretch: 100;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
