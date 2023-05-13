import { MapPinLine } from 'phosphor-react'
import {
  CheckoutSection,
  CheckoutSectionContainer,
  AddressContent,
  Cart,
  CheckoutContent,
  AddressContentHeader,
  CartContainer,
  ProductList,
  ProductItem,
  PurchaseButton,
} from './styles'
import { AddressFields } from './components/AddressFields'
import { PaymentSelect } from './components/PaymentSelect'
import { CardProductCart } from './components/CardProductCart'
import { Summary } from './components/Summary'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const addAddressFormValidationSchema = zod.object({
  address: zod.object({
    zipcode: zod.string(),
    street: zod.string(),
    number: zod.string(),
    complement: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    federativeUnity: zod.string(),
  }),
  paymentType: zod.enum(['credit-card', 'debit-card', 'money']),
})

export type AddAddressFormValidationFormData = zod.infer<
  typeof addAddressFormValidationSchema
>

export function Checkout() {
  const { productsState, updateOrderInfo } = useContext(CartContext)
  const navigate = useNavigate()
  const addAddressForm = useForm<AddAddressFormValidationFormData>({
    resolver: zodResolver(addAddressFormValidationSchema),
  })

  const { handleSubmit } = addAddressForm
  function handleFinishOrder(data: AddAddressFormValidationFormData) {
    updateOrderInfo(data)
    navigate('/success')
  }
  return (
    <CheckoutSection>
      <CheckoutSectionContainer>
        <CheckoutContent onSubmit={handleSubmit(handleFinishOrder)}>
          <AddressContent>
            <h4>Complete seu pedido</h4>
            <div>
              <AddressContentHeader>
                <MapPinLine weight="regular" size={22} />
                <div>
                  <h5>Endereço de Entrega</h5>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </AddressContentHeader>
              <FormProvider {...addAddressForm}>
                <AddressFields />
              </FormProvider>
            </div>
            <FormProvider {...addAddressForm}>
              <PaymentSelect />
            </FormProvider>
          </AddressContent>
          <Cart>
            <h4>Café Selecionados</h4>
            <CartContainer>
              <ProductList>
                {productsState.map((product) => (
                  <ProductItem key={product.id}>
                    <CardProductCart
                      price={product.price}
                      name={product.name}
                      image={product.image}
                      quantity={product.quantity}
                      id={product.id}
                    />
                  </ProductItem>
                ))}
              </ProductList>
              <Summary />
              <PurchaseButton type="submit">Confirmar Pedido</PurchaseButton>
            </CartContainer>
          </Cart>
        </CheckoutContent>
      </CheckoutSectionContainer>
    </CheckoutSection>
  )
}
