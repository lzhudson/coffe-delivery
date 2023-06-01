import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './context/CartContext'
export function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </CartProvider>
  )
}
