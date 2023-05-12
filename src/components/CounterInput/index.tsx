import { CounterInputContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface CounterInputProps {
  onIncrementQuantity: () => void
  onDecrementQuantity: () => void
  onChangeProductQuantity: (quantity: number) => void
  quantityProduct: number
}

export function CounterInput({
  onIncrementQuantity,
  onDecrementQuantity,
  onChangeProductQuantity,
  quantityProduct,
}: CounterInputProps) {
  function handleIncrementQuantity() {
    onIncrementQuantity()
  }

  function handleDecrementQuantity() {
    onDecrementQuantity()
  }

  const isButtonEnable = quantityProduct <= 1
  return (
    <CounterInputContainer>
      <button
        type="button"
        onClick={handleDecrementQuantity}
        disabled={isButtonEnable}
        title="Subtraction Item"
      >
        <Minus weight="bold" />
      </button>
      <input
        type="number"
        value={quantityProduct}
        onChange={(e) => onChangeProductQuantity(Number(e.target.value))}
        name="quantityProduct"
        min={1}
      />
      <button
        type="button"
        onClick={handleIncrementQuantity}
        title="Adding Item"
      >
        <Plus weight="bold" />
      </button>
    </CounterInputContainer>
  )
}
