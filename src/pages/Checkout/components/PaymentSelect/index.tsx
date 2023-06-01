import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentOptionsContainer,
  PaymentSelectContainer,
  PaymentSelectHeader,
  RadioContainer,
} from './style'
import { useFormContext } from 'react-hook-form'
import { AddAddressFormValidationFormData } from '../..'
import { Feedback } from '../../../../components/Feedback'

export function PaymentSelect() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddAddressFormValidationFormData>()

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
            value="credit-card"
            {...register('paymentType')}
          />
          <label htmlFor="credit-card">
            <CreditCard weight="regular" size={16} /> Cartão de Crédito
          </label>
        </RadioContainer>

        <RadioContainer>
          <input
            type="radio"
            id="debit-card"
            value="debit-card"
            {...register('paymentType')}
          />
          <label htmlFor="debit-card">
            <Bank weight="regular" size={16} />
            Cartão de Débito
          </label>
        </RadioContainer>

        <RadioContainer>
          <input
            type="radio"
            id="money"
            value="money"
            {...register('paymentType')}
          />
          <label htmlFor="money">
            <Money weight="regular" size={16} />
            Dinheiro
          </label>
        </RadioContainer>
      </PaymentOptionsContainer>
      {errors.paymentType?.message && (
        <Feedback>{errors.paymentType.message}</Feedback>
      )}
    </PaymentSelectContainer>
  )
}
