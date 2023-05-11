import { SummaryTable } from './style'

export function Summary() {
  return (
    <SummaryTable>
      <tbody>
        <tr>
          <td>Total de itens</td>
          <td>R$ 29,70</td>
        </tr>
        <tr>
          <td>Entrega</td>
          <td>R$ 3,50</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>R$ 33,20</td>
        </tr>
      </tbody>
    </SummaryTable>
  )
}
