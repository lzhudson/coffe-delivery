import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useSummary() {
  const { products } = useContext(CartContext)
  const summary = products.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
  console.log(summary)
  return summary
}
