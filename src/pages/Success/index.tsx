import { OrderInfo } from './components/OrderInfo'
import { OrderContent, SuccessContainer, SuccessSection } from './styles'
import manInBike from '../../assets/images/man-in-bike.svg'
export function Success() {
  return (
    <SuccessSection>
      <SuccessContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderContent>
          <OrderInfo />
          <div className="image-container">
            <img src={manInBike} alt="Homem de Moto" />
          </div>
        </OrderContent>
      </SuccessContainer>
    </SuccessSection>
  )
}
