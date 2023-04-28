import { ShoppingCartSimple } from 'phosphor-react'
import { Coffe } from '../../../../../../@types/coffe'
import { TagsList } from './components/TagsList'
import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  AddToCartContainer,
} from './style'

import subtractionIcon from '../../../../../../assets/images/subtraction.svg'
import plusIcon from '../../../../../../assets/images/plus.svg'
import { useState } from 'react'

interface CoffeCardProps extends Coffe {}

export function CoffeeCard({
  image,
  tags,
  name,
  description,
  price,
}: CoffeCardProps) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(price)
    .replace('R$', '')

  const [quantityProduct, setQuantityProduct] = useState(0)

  function handleIncrementQuantity() {
    setQuantityProduct((prevState) => prevState + 1)
  }

  function handleDecrementQuantity() {
    setQuantityProduct((prevState) => prevState - 1)
  }
  const isButtonEnable = quantityProduct < 1
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
        <AddToCartContainer>
          <div>
            <button
              onClick={handleDecrementQuantity}
              disabled={isButtonEnable}
              title="Subtraction Item"
            >
              <img src={subtractionIcon} alt="Subtraction" />
            </button>
            <input
              type="number"
              value={quantityProduct}
              onChange={(e) => setQuantityProduct(Number(e.target.value))}
              name="quantityProduct"
            />
            <button onClick={handleIncrementQuantity} title="Adding Item">
              <img src={plusIcon} alt="Subtraction" />
            </button>
          </div>
          <button>
            <ShoppingCartSimple weight="fill" size={22} />
          </button>
        </AddToCartContainer>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
