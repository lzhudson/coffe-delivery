import styled from 'styled-components'
import backgroundImage from '../../../../assets/images/pages/home/background.png'

export const Section = styled.div`
  background: url(${backgroundImage}) no-repeat center/cover;
`
export const MainContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 5.875rem 0 6.75rem;
  display: flex;
  gap: ${(props) => props.theme.pixelToRem(56)};
  align-items: center;
  @media (max-width: 1180px) {
    padding: 2.9375rem 0.75rem 3.375rem;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1180px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  p {
    margin-top: ${(props) => props.theme.pixelToRem(16)};
    font-size: ${(props) => props.theme.pixelToRem(20)};
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const MainTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.baloo};
  font-weight: 800;
  font-size: ${(props) => props.theme.pixelToRem(48)};
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-title']};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.pixelToRem(24)};
  }
`

export const AdvantageList = styled.ul`
  display: grid;
  grid-template-columns: minmax(max-content, 294px) minmax(max-content, 294px);
  column-gap: ${(props) => props.theme.pixelToRem(40)};
  row-gap: ${(props) => props.theme.pixelToRem(20)};
  margin-top: ${(props) => props.theme.pixelToRem(66)};
  li {
    display: flex;
    gap: ${(props) => props.theme.pixelToRem(12)};
    font-size: ${(props) => props.theme.pixelToRem(16)};
    color: ${(props) => props.theme.colors['base-text']};
    align-items: center;
    @media (max-width: 768px) {
      font-size: ${(props) => props.theme.pixelToRem(14)};
    }
    div {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1000px;
    }
    &:nth-child(1) {
      div {
        background-color: ${(props) => props.theme.colors['yellow-dark']};
      }
    }
    &:nth-child(2) {
      div {
        background-color: ${(props) => props.theme.colors['base-text']};
      }
    }
    &:nth-child(3) {
      div {
        background-color: ${(props) => props.theme.colors.yellow};
      }
    }
    &:nth-child(4) {
      div {
        background-color: ${(props) => props.theme.colors.purple};
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: ${(props) => props.theme.pixelToRem(24)};
  }
`

export const RightContent = styled.div`
  align-self: center;
  width: 100%;
  max-width: 476px;
  img {
    width: 100%;
  }
`
