import { coffeesData } from '../../../../data/coffees'
import { CoffeeCard } from './components/CoffeCard'
import { CoffeeSectionContainer, CoffeListItem, CoffesList } from './styles'

export function CoffeesSection() {
  return (
    <CoffeeSectionContainer>
      <div className="container">
        <h1>Nossos cafés</h1>

        <CoffesList>
          {coffeesData.map((coffee) => (
            <CoffeListItem key={coffee.id}>
              <CoffeeCard
                id={coffee.id}
                description={coffee.description}
                image={coffee.image}
                name={coffee.name}
                price={coffee.price}
                tags={coffee.tags}
              />
            </CoffeListItem>
          ))}
        </CoffesList>
      </div>
    </CoffeeSectionContainer>
  )
}
