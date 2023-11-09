import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './context/CartContext'
export function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
        <HashRouter>
          <Router />
        </HashRouter>
        <GlobalStyle />
      </ThemeProvider>
    </CartProvider>
  )
}
