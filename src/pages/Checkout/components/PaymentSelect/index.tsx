import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentOptionsContainer,
  PaymentSelectContainer,
  PaymentSelectHeader,
  RadioContainer,
} from './style'

export function PaymentSelect() {
  return (
    <PaymentSelectContainer>
      <PaymentSelectHeader>
        <CurrencyDollar weight="regular" size={22} />
        <div>
          <h5>Pagamento</h5>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentSelectHeader>
      <PaymentOptionsContainer>
        <RadioContainer>
          <input
            type="radio"
            id="credit-card"
            name="payment-option"
            value="credit-card"
          />
          <label htmlFor="credit-card">
            <CreditCard weight="regular" size={16} /> Cartão de Crédito
          </label>
        </RadioContainer>

        <RadioContainer>
          <input
            type="radio"
            id="debit-card"
            name="payment-option"
            value="debit-card"
          />
          <label htmlFor="debit-card">
            <Bank weight="regular" size={16} />
            Cartão de Débito
          </label>
        </RadioContainer>

        <RadioContainer>
          <input type="radio" id="money" name="payment-option" value="money" />
          <label htmlFor="money">
            <Money weight="regular" size={16} />
            Dinheiro
          </label>
        </RadioContainer>
      </PaymentOptionsContainer>
    </PaymentSelectContainer>
  )
}
