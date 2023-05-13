import { HeaderContainer, LocationBadge, CartButton } from './style'
import logo from '../../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { NavLink } from 'react-router-dom'
export function Header() {
  const { productsState } = useContext(CartContext)
  const productQuantity = productsState.length || 0

  return (
    <header>
      <HeaderContainer>
        <NavLink to={'/'}>
          <img src={logo} alt="Coffe Delivery" />
        </NavLink>
        <div className="actions-container">
          <LocationBadge>
            <MapPin weight="fill" size={22} />
            Fortaleza, CE
          </LocationBadge>
          <NavLink to={'/checkout'}>
            <CartButton>
              <ShoppingCart weight="fill" size={22} />
              <span>{productQuantity}</span>
            </CartButton>
          </NavLink>
        </div>
      </HeaderContainer>
    </header>
  )
}
