import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 0 1.25rem;
  border-radius: 6px 36px;

  > img {
    margin-top: -20px;
    width: 100%;
    max-width: 120px;
  }
  ul {
    margin-top: ${(props) => props.theme.pixelToRem(12)};
  }
  h2 {
    font-family: ${(props) => props.theme.fonts.baloo};
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 1rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: ${(props) => props.theme.pixelToRem(14)};
    color: ${(props) => props.theme.colors['base-label']};
    line-height: 130%;
  }
`

export const CoffeeCardFooter = styled.footer`
  display: flex;
  margin-top: ${(props) => props.theme.pixelToRem(33)};
  gap: ${(props) => props.theme.pixelToRem(23)};
  padding-bottom: 20px;
  span {
    font-size: ${(props) => props.theme.pixelToRem(14)};
    color: ${(props) => props.theme.colors['base-text']};
    display: flex;
    align-items: center;
    font-weight: 400;
    line-height: 130%;
    strong {
      font-size: ${(props) => props.theme.pixelToRem(24)};
      font-family: ${(props) => props.theme.fonts.baloo};
      font-weight: 800;
    }
  }
`

export const AddToCartContainer = styled.form`
  display: flex;
  gap: 8px;
  max-width: 118px;
  gap: 0.5rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background-color: ${(props) => props.theme.colors['base-button']};
    padding: 8px;
    border-radius: 6px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      width: 14px;
      height: 14px;
      cursor: pointer;
      &:disabled {
        cursor: not-allowed;
      }
    }
    input[type='number'] {
      width: 20px;
      height: 21px;
      background-color: transparent;
      border: none;
      text-align: center;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      appearance: textfield;
    }
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    background-color: ${(props) => props.theme.colors['purple-dark']};
    border-radius: 6px;
    border: none;
    padding: 8px;
    cursor: pointer;
    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }
`
