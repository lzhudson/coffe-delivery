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

export function Checkout() {
  const { products } = useContext(CartContext)
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
                {products.map((product) => (
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
