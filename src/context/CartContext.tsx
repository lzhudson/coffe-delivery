import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { productsReducer } from '../reducers/products/reducers'
import {
  addNewProductAction,
  decreaseQuantityProductAction,
  increaseQuantityProductAction,
  removeProductAction,
  updateQuantityProductAction,
} from '../reducers/products/actions'

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

export interface ProductInput extends Product {
  quantity: number
}

interface CartContextProps {
  orderInfo: OrderInfo
  productsState: Product[]
  addProduct: (product: ProductInput) => void
  updateOrderInfo: (orderInfo: OrderInfo) => void
  deleteProduct: (product: number) => void
  updateProductQuantity: (productId: number, quantity: number) => void
  increaseProductQuantity: (productId: number, quantity: number) => void
  decreaseProductQuantity: (productId: number, quantity: number) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}
export function CartProvider({ children }: CartProviderProps) {
  const [productsState, dispatch] = useReducer(
    productsReducer,
    [],
    (initialState) => {
      const productsInLocalStorage = localStorage?.getItem(
        '@coffee-delivery:productsState-state-1.0.0',
      )
      if (productsInLocalStorage) {
        return JSON.parse(productsInLocalStorage)
      }
      return initialState
    },
  )
  const [orderInfo, setOrderInfo] = useState({} as OrderInfo)

  function addProduct(product: ProductInput) {
    dispatch(addNewProductAction(product))
  }

  function increaseProductQuantity(productId: number) {
    dispatch(increaseQuantityProductAction(productId))
  }

  function decreaseProductQuantity(productId: number) {
    dispatch(decreaseQuantityProductAction(productId))
  }

  function updateProductQuantity(productId: number, quantity: number) {
    dispatch(updateQuantityProductAction(productId, quantity))
  }

  function deleteProduct(productId: number) {
    dispatch(removeProductAction(productId))
  }

  function updateOrderInfo(orderInfo: OrderInfo) {
    setOrderInfo(orderInfo)
  }

  useEffect(() => {
    const productsJSON = JSON.stringify(productsState)
    localStorage.setItem(
      '@coffee-delivery:productsState-state-1.0.0',
      productsJSON,
    )
  }, [productsState])

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
        productsState,
        addProduct,
        updateProductQuantity,
        increaseProductQuantity,
        decreaseProductQuantity,
        updateOrderInfo,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
