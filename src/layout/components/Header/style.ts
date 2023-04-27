import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 0.75rem;
  .actions-container {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.pixelToRem(12)};
  }
`

export const LocationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['purple-light']};

  color: ${(props) => props.theme.colors['purple-dark']};

  font-size: ${(props) => props.theme.pixelToRem(14)};
`
export const CartButton = styled.button`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 6px;
  padding: 8px;
  border: none;
  line-height: 0;
  cursor: pointer;
  position: relative;
  span {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    font-size: ${(props) => props.theme.pixelToRem(12)};
    letter-spacing: -0.06em;
    right: -8.35px;
    top: -8px;
  }
  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
