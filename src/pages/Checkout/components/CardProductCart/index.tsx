import { Trash } from 'phosphor-react'
import { CounterInput } from '../../../../components/CounterInput'
import {
  ButtonRemoveFromCart,
  CardProductCartActions,
  CardProductCartContainer,
  CardProductCartDetails,
  CardProductCartInfo,
} from './styles'
import { CartContext, Product } from '../../../../context/CartContext'
import { formatPriceWithoutCurrencySymbol } from '../../../../utils/format'
import { useContext } from 'react'

type CardProductCartProps = Omit<Product, 'description' | 'tags'>

export function CardProductCart({
  id,
  image,
  name,
  price,
  quantity,
}: CardProductCartProps) {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    updateProductQuantity,
    deleteProduct,
  } = useContext(CartContext)
  function onIncrementQuantity() {
    increaseProductQuantity(id, 1)
  }

  function onDecrementQuantity() {
    decreaseProductQuantity(id, -1)
  }

  function onChangeProductQuantity(quantity: number) {
    updateProductQuantity(id, quantity)
  }

  function handleDeleteProduct(productId: number) {
    deleteProduct(productId)
  }

  return (
    <CardProductCartContainer>
      <CardProductCartInfo>
        <img src={image} alt={name} />
        <CardProductCartDetails>
          <h5>{name}</h5>
          <CardProductCartActions>
            <CounterInput
              onChangeProductQuantity={onChangeProductQuantity}
              onDecrementQuantity={onDecrementQuantity}
              onIncrementQuantity={onIncrementQuantity}
              quantityProduct={quantity}
            />
            <ButtonRemoveFromCart
              type="button"
              onClick={() => handleDeleteProduct(id)}
              title="Deletar"
            >
              <Trash size={16} weight="regular" />
              Remover
            </ButtonRemoveFromCart>
          </CardProductCartActions>
        </CardProductCartDetails>
      </CardProductCartInfo>
      <strong>R$ {formatPriceWithoutCurrencySymbol(price)}</strong>
    </CardProductCartContainer>
  )
}
