import express from '../assets/images/coffes/express.png'
import american from '../assets/images/coffes/american.png'
import expressCreamy from '../assets/images/coffes/creamy-express.png'
import icedCoffe from '../assets/images/coffes/iced-coffe.png'
import coffeWithMilk from '../assets/images/coffes/coffe-with-milk.png'
import latte from '../assets/images/coffes/latte.png'
import capuccino from '../assets/images/coffes/capuccino.png'
import macchiato from '../assets/images/coffes/macchiato.png'
import mocaccino from '../assets/images/coffes/mocaccino.png'
import hotChocolate from '../assets/images/coffes/hot-chocolate.png'
import cuban from '../assets/images/coffes/cuban.png'
import hawaiian from '../assets/images/coffes/hawaiian.png'
import arabic from '../assets/images/coffes/arabic.png'
import irish from '../assets/images/coffes/irish.png'

export const coffeesData = [
  {
    id: 1,
    image: express,
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    image: american,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    image: expressCreamy,
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    image: icedCoffe,
    tags: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    image: coffeWithMilk,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    image: latte,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    image: capuccino,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    image: macchiato,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 10,
    image: mocaccino,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 11,
    image: hotChocolate,
    tags: ['Tradicional', 'Com Leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 12,
    image: cuban,
    tags: ['Tradicional', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 13,
    image: hawaiian,
    tags: ['Especial'],
    name: 'Haviano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 14,
    image: arabic,
    tags: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 15,
    image: irish,
    tags: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
