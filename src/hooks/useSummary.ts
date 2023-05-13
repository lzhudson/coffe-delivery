import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useSummary() {
  const { productsState } = useContext(CartContext)
  const summary = productsState.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
  return summary
}
