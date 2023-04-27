import { HeaderContainer, LocationBadge, CartButton } from './style'
import logo from '../../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
export function Header() {
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
            <span>3</span>
          </CartButton>
        </div>
      </HeaderContainer>
    </header>
  )
}
