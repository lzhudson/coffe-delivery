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
import { useContext, useEffect, useState } from 'react'

type CardProductCartProps = Omit<Product, 'description' | 'tags'>

export function CardProductCart({
  id,
  image,
  name,
  price,
  quantity,
}: CardProductCartProps) {
  const { updateProductQuantity, deleteProduct } = useContext(CartContext)
  const [quantityProduct, setQuantityProduct] = useState(quantity)

  function onIncrementQuantity() {
    setQuantityProduct((prevState) => prevState + 1)
  }

  function onDecrementQuantity() {
    setQuantityProduct((prevState) => prevState - 1)
  }

  function onChangeProductQuantity(quantity: number) {
    setQuantityProduct(quantity)
  }

  function handleDeleteProduct(productId: number) {
    deleteProduct(productId)
  }

  useEffect(() => {
    updateProductQuantity(id, quantityProduct)
  }, [quantityProduct])

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
              quantityProduct={quantityProduct}
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
