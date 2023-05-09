import { ReactNode, createContext, useState } from 'react'

export interface Product {
  id: number
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  quantity: number
}

interface ProductInput extends Product {
  quantity: number
}

interface CartContextProps {
  products: Product[]
  addProduct: (product: ProductInput) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  function addProduct(product: ProductInput) {
    const productInput = product
    const productInCart =
      products.findIndex((product) => product.id === productInput.id) >= 0
    if (productInCart) {
      const productsUpdated = products.map((product) => {
        if (product.id === productInput.id) {
          return {
            ...product,
            quantity: product.quantity + productInput.quantity,
          }
        }
        return product
      })
      setProducts(productsUpdated)
    } else {
      setProducts((prevState) => [...prevState, productInput])
    }
  }
  return (
    <CartContext.Provider value={{ products, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}
