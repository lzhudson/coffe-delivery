import { Product } from '../../context/CartContext'
import { ActionTypes } from './actions'
export function productsReducer(currentCartState: Product[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const cart = [...currentCartState]
      const currentProduct = action.payload.product
      const productIndex = cart.findIndex(
        (product) => product.id === currentProduct.id,
      )
      const productExistsInCart = productIndex >= 0
      if (productExistsInCart) {
        const productUpdated = {
          ...cart[productIndex],
        }
        productUpdated.quantity += currentProduct.quantity
        cart[productIndex] = productUpdated
      } else {
        cart.push(currentProduct)
      }
      return [...cart]
    }
    case ActionTypes.INCREASE_PRODUCT_QUANTITY: {
      const cart = [...currentCartState]
      const currentProductId = action.payload.productId
      const productIndex = cart.findIndex(
        (product) => product.id === currentProductId,
      )
      const productExistsInCart = productIndex >= 0
      if (productExistsInCart) {
        const productUpdated = {
          ...cart[productIndex],
        }
        productUpdated.quantity += 1
        cart[productIndex] = productUpdated
      }
      return [...cart]
    }
    case ActionTypes.DECREASE_PRODUCT_QUANTITY: {
      const cart = [...currentCartState]
      const currentProductId = action.payload.productId
      const productIndex = cart.findIndex(
        (product) => product.id === currentProductId,
      )
      const productExistsInCart = productIndex >= 0
      if (productExistsInCart) {
        const productUpdated = {
          ...cart[productIndex],
        }
        productUpdated.quantity -= 1
        cart[productIndex] = productUpdated
      }
      return [...cart]
    }
    case ActionTypes.UPDATE_PRODUCT_QUANTITY: {
      const cart = [...currentCartState]
      const currentProductId = action.payload.productId
      const currentProductQuantity = action.payload.quantity
      const productIndex = cart.findIndex(
        (product) => product.id === currentProductId,
      )
      const productExistsInCart = productIndex >= 0
      if (productExistsInCart) {
        const productUpdated = {
          ...cart[productIndex],
        }
        productUpdated.quantity = currentProductQuantity
        cart[productIndex] = productUpdated
      }
      return [...cart]
    }

    case ActionTypes.REMOVE_PRODUCT: {
      let cart = [...currentCartState]
      const currentProductId = action.payload.productId
      cart = cart.filter((product) => product.id !== currentProductId)
      return [...cart]
    }

    default:
      return currentCartState
  }
}
