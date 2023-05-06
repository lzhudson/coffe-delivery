import styled from 'styled-components'

export const OrderInfoContainer = styled.div`
  padding: 1px;
  border-radius: 6px 36px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  @media (max-width: 981px) {
    padding: 1px;
  }
`

export const OrderInfoContent = styled.div`
  padding: 39px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 6px 36px;
  height: 100%;
  @media (max-width: 981px) {
    padding: 15px;
    gap: 1rem;
  }
`

export const OrderItemInfoBase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  .icon-container {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border-radius: 1000px;
    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors['base-text']};
    line-height: 130%;

    @media (max-width: 981px) {
      font-size: 0.875rem;
    }
  }
`

export const OrderItemInfoLocal = styled(OrderItemInfoBase)`
  .icon-container {
    background: ${(props) => props.theme.colors.purple};
  }
`
export const OrderItemInfoTime = styled(OrderItemInfoBase)`
  .icon-container {
    background: ${(props) => props.theme.colors.yellow};
  }
`
export const OrderItemInfoPayment = styled(OrderItemInfoBase)`
  .icon-container {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`
