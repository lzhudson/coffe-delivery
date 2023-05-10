import { ShoppingCartSimple } from 'phosphor-react'
import { Coffe } from '../../../../../../@types/coffe'
import { TagsList } from './components/TagsList'
import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  AddToCartContainer,
} from './style'

import { CounterInput } from '../../../../../../components/CounterInput'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../../../../../context/CartContext'

interface CoffeCardProps extends Coffe {}

export function CoffeeCard({
  id,
  image,
  tags,
  name,
  description,
  price,
}: CoffeCardProps) {
  const { addProduct } = useContext(CartContext)
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(price)
    .replace('R$', '')

  const [quantityProduct, setQuantityProduct] = useState(1)

  function onIncrementQuantity() {
    setQuantityProduct((prevState) => prevState + 1)
  }

  function onDecrementQuantity() {
    setQuantityProduct((prevState) => prevState - 1)
  }

  function onChangeProductQuantity(quantity: number) {
    setQuantityProduct(quantity)
  }

  function resetInputQuantity() {
    setQuantityProduct(1)
  }

  function handleAddProductInCart(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const product = {
      id,
      image,
      tags,
      name,
      description,
      price,
      quantity: quantityProduct,
    }
    addProduct(product)
    resetInputQuantity()
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt={name} />
      <TagsList tags={tags} />
      <h2>{name}</h2>
      <p>{description}</p>
      <CoffeeCardFooter>
        <span>
          R$
          <strong>{priceFormatted}</strong>
        </span>
        <AddToCartContainer onSubmit={(e) => handleAddProductInCart(e)}>
          <CounterInput
            onDecrementQuantity={onDecrementQuantity}
            onIncrementQuantity={onIncrementQuantity}
            quantityProduct={quantityProduct}
            onChangeProductQuantity={onChangeProductQuantity}
          />
          <button title="Add to cart">
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </AddToCartContainer>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
