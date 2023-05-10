import { ReactNode, createContext, useEffect, useState } from 'react'

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
  updateProductQuantity: (productId: number, quantity: number) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>(() => {
    const productsInLocalStorage = JSON.parse(
      localStorage.getItem('@coffee-delivery:products-state-1.0.0') || '',
    )
    if (productsInLocalStorage) {
      return productsInLocalStorage
    }
    return []
  })

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

  function updateProductQuantity(productId: number, quantity: number) {
    const productInCart =
      products.findIndex((product) => product.id === productId) >= 0
    if (productInCart) {
      const productsUpdated = products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity,
          }
        }
        return product
      })
      setProducts(productsUpdated)
    }
  }

  useEffect(() => {
    const productsJSON = JSON.stringify(products)
    localStorage.setItem('@coffee-delivery:products-state-1.0.0', productsJSON)
  }, [products])

  return (
    <CartContext.Provider
      value={{ products, addProduct, updateProductQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
