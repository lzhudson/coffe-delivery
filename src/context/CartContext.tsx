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

interface OrderInfo {
  address: {
    zipcode: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    federativeUnity: string
  }
  paymentType: 'credit-card' | 'debit-card' | 'money'
}

interface ProductInput extends Product {
  quantity: number
}

interface CartContextProps {
  orderInfo: OrderInfo
  products: Product[]
  addProduct: (product: ProductInput) => void
  updateOrderInfo: (orderInfo: OrderInfo) => void
  deleteProduct: (product: number) => void
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

  const [orderInfo, setOrderInfo] = useState({} as OrderInfo)

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

  function deleteProduct(productId: number) {
    const productsUpdated = products.filter(
      (product) => product.id !== productId,
    )
    setProducts(productsUpdated)
  }

  function updateOrderInfo(orderInfo: OrderInfo) {
    console.log(orderInfo)
    setOrderInfo(orderInfo)
  }

  useEffect(() => {
    const productsJSON = JSON.stringify(products)
    localStorage.setItem('@coffee-delivery:products-state-1.0.0', productsJSON)
  }, [products])

  useEffect(() => {
    const orderInfoJSON = JSON.stringify(orderInfo)
    localStorage.setItem(
      '@coffee-delivery:order-info-state-1.0.0',
      orderInfoJSON,
    )
  }, [orderInfo])

  return (
    <CartContext.Provider
      value={{
        orderInfo,
        products,
        addProduct,
        updateProductQuantity,
        updateOrderInfo,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
