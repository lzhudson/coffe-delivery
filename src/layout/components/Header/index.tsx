import { HeaderContainer, LocationBadge, CartButton } from './style'
import logo from '../../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
export function Header() {
  const { products } = useContext(CartContext)
  const productQuantity = products.length

  return (
    <header>
      <HeaderContainer>
        <img src={logo} alt="Coffe Delivery" />
        <div className="actions-container">
          <LocationBadge>
            <MapPin weight="fill" size={22} />
            Fortaleza, CE
          </LocationBadge>
          <CartButton>
            <ShoppingCart weight="fill" size={22} />
            <span>{productQuantity}</span>
          </CartButton>
        </div>
      </HeaderContainer>
    </header>
  )
}
