import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  LeftContent,
  MainContainer,
  MainTitle,
  AdvantageList,
  RightContent,
  Section,
} from './styles'
import coffeImage from '../../../../assets/images/pages/home/coffe.png'
export function MainBanner() {
  return (
    <Section>
      <MainContainer>
        <LeftContent>
          <MainTitle>
            Encontre o café perfeito para qualquer hora do dia
          </MainTitle>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <AdvantageList>
            <li>
              <div>
                <ShoppingCart weight="fill" color="white" size={16} />
              </div>
              Compra simples e segura
            </li>
            <li>
              <div>
                <Package weight="fill" color="white" size={16} />
              </div>
              Embalagem mantém o café intacto
            </li>
            <li>
              <div>
                <Timer weight="fill" color="white" size={16} />
              </div>
              Entrega rápida e rastreada
            </li>
            <li>
              <div>
                <Coffee weight="fill" color="white" size={16} />
              </div>
              O café chega fresquinho até você
            </li>
          </AdvantageList>
        </LeftContent>
        <RightContent>
          <img src={coffeImage} alt="Coffe Delivery Image" />
        </RightContent>
      </MainContainer>
    </Section>
  )
}
