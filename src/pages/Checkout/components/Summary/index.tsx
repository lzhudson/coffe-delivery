import { useSummary } from '../../../../hooks/useSummary'
import { formatPriceWithoutCurrencySymbol } from '../../../../utils/format'
import { SummaryTable } from './style'

export function Summary() {
  const summary = useSummary()
  return (
    <SummaryTable>
      <tbody>
        <tr>
          <td>Total de itens</td>
          <td>R$ {formatPriceWithoutCurrencySymbol(summary)}</td>
        </tr>
        <tr>
          <td>Entrega</td>
          <td>R$ 3,50</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>R$ {formatPriceWithoutCurrencySymbol(summary + 3.5)}</td>
        </tr>
      </tbody>
    </SummaryTable>
  )
}
