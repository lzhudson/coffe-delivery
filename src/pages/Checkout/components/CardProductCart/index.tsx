import { Trash } from 'phosphor-react'
import coffeExpress from '../../../../assets/images/coffes/express.png'
import { CounterInput } from '../../../../components/CounterInput'
import {
  ButtonRemoveFromCart,
  CardProductCartActions,
  CardProductCartContainer,
  CardProductCartDetails,
  CardProductCartInfo,
} from './styles'
export function CardProductCart() {
  return (
    <CardProductCartContainer>
      <CardProductCartInfo>
        <img src={coffeExpress} alt="Café Expresso" />
        <CardProductCartDetails>
          <h5>Expresso Tradicional</h5>
          <CardProductCartActions>
            <CounterInput />
            <ButtonRemoveFromCart type="button">
              <Trash size={16} weight="regular" />
              Remover
            </ButtonRemoveFromCart>
          </CardProductCartActions>
        </CardProductCartDetails>
      </CardProductCartInfo>
      <strong>R$ 9,90</strong>
    </CardProductCartContainer>
  )
}
