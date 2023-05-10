export function formatPriceWithoutCurrencySymbol(value: number) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value)
    .replace('R$', '')
  return priceFormatted
}
