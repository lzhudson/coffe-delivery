import styled from 'styled-components'

export const SummaryTable = styled.table`
  width: 100%;
  border-spacing: 0px 0.75rem;
  margin-top: ${(props) => props.theme.pixelToRem(10)};
  border-collapse: separate;
  td {
    &:first-child {
      font-size: 0.875rem;
    }
    &:last-child {
      text-align: right;
    }
  }
  tr {
    &:last-child {
      td {
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors['base-subtitle']};
        font-weight: 700;
      }
    }
  }
`
