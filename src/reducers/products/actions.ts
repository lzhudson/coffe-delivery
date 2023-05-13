import { ProductInput } from '../../context/CartContext'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTIT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function addNewProductAction(product: ProductInput) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function increaseQuantityProductAction(productId: number) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  }
}

export function decreaseQuantityProductAction(productId: number) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  }
}

export function updateQuantityProductAction(
  productId: number,
  quantity: number,
) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  }
}

export function removeProductAction(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  }
}
