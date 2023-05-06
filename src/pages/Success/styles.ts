import styled from 'styled-components'

export const SuccessSection = styled.section``

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 0.75rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.baloo};
    font-weight: 800;
    font-size: ${(props) => props.theme.pixelToRem(32)};
    color: ${(props) => props.theme.colors['yellow-dark']};
    @media (max-width: 981px) {
      font-size: ${(props) => props.theme.pixelToRem(24)};
    }
  }

  p {
    margin-top: 0.25rem;
    font-weight: 400;
    font-size: ${(props) => props.theme.pixelToRem(20)};
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-stretch: 100;
    @media (max-width: 981px) {
      font-size: ${(props) => props.theme.pixelToRem(14)};
    }
  }
`

export const OrderContent = styled.div`
  display: grid;
  grid-template-columns: 526px 492px;
  column-gap: 102px;
  margin-top: 2.5rem;
  @media (max-width: 1120px) {
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
  .img-container {
    max-width: 492px;
  }
  img {
    width: 100%;
    @media (max-width: 981px) {
      margin-top: 1rem;
    }
  }
`
