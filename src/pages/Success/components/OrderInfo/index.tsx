import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  OrderInfoContainer,
  OrderInfoContent,
  OrderItemInfoLocal,
  OrderItemInfoPayment,
  OrderItemInfoTime,
} from './style'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'

const PAYMENT_TYPE_TEXT = {
  'credit-card': 'Cartão de Crédito',
  'debit-card': 'Cartão de Débito',
  money: 'Dinheiro',
}

export function OrderInfo() {
  const { orderInfo } = useContext(CartContext)
  const {
    address: { street, number, city, neighborhood, federativeUnity },
    paymentType,
  } = orderInfo
  return (
    <OrderInfoContainer>
      <OrderInfoContent>
        <OrderItemInfoLocal>
          <div className="icon-container">
            <MapPin weight="fill" size={16} />
          </div>
          <p>
            Entrega em Rua{' '}
            <strong>
              {street}, {number}{' '}
            </strong>
            <br />
            {neighborhood} - {city}, {federativeUnity}
          </p>
        </OrderItemInfoLocal>
        <OrderItemInfoTime>
          <div className="icon-container">
            <Timer weight="fill" size={16} />
          </div>
          <p>
            Previsão de entrega <br />
            <strong>20 min - 30 min </strong>
          </p>
        </OrderItemInfoTime>
        <OrderItemInfoPayment>
          <div className="icon-container">
            <CurrencyDollar weight="regular" size={16} />
          </div>
          <p>
            Pagamento na entrega <br />
            <strong>{PAYMENT_TYPE_TEXT[paymentType]}</strong>
          </p>
        </OrderItemInfoPayment>
      </OrderInfoContent>
    </OrderInfoContainer>
  )
}
