import { MapPin } from 'phosphor-react'
import {
  OrderInfoContainer,
  OrderInfoContent,
  OrderItemInfoLocal,
  OrderItemInfoPayment,
  OrderItemInfoTime,
} from './style'

export function OrderInfo() {
  return (
    <OrderInfoContainer>
      <OrderInfoContent>
        <OrderItemInfoLocal>
          <div className="icon-container">
            <MapPin weight="fill" size={16} />
          </div>
          <p>
            Entrega em Rua <strong>João Daniel Martinelli, 102 </strong>
            <br />
            Farrapos - Porto Alegre, RS
          </p>
        </OrderItemInfoLocal>
        <OrderItemInfoTime>
          <div className="icon-container">
            <MapPin weight="fill" size={16} />
          </div>
          <p>
            Previsão de entrega <br />
            <strong>20 min - 30 min </strong>
          </p>
        </OrderItemInfoTime>
        <OrderItemInfoPayment>
          <div className="icon-container">
            <MapPin weight="fill" size={16} />
          </div>
          <p>
            Pagamento na entrega <br />
            <strong>Cartão de Crédito</strong>
          </p>
        </OrderItemInfoPayment>
      </OrderInfoContent>
    </OrderInfoContainer>
  )
}
