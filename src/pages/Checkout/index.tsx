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

export function Checkout() {
  return (
    <CheckoutSection>
      <CheckoutSectionContainer>
        <CheckoutContent>
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
              <AddressFields />
            </div>
            <PaymentSelect />
          </AddressContent>
          <Cart>
            <h4>Café Selecioandos</h4>
            <CartContainer>
              <ProductList>
                <ProductItem>
                  <CardProductCart />
                </ProductItem>
                <ProductItem>
                  <CardProductCart />
                </ProductItem>
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
