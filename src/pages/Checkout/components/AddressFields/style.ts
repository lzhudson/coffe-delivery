import styled from 'styled-components'

export const AddressFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  div {
    &:nth-child(1) {
      grid-template-columns: 200px;
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    &:nth-child(3) {
      grid-template-columns: 200px 1fr;
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    &:nth-child(4) {
      grid-template-columns: 200px 276px 60px;
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
  }
`
