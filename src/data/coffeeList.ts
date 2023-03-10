import { Coffee } from "../core/coffee/Coffee";
import tradicional from "../assets/coffees/tradicional.svg"
import arabe from "../assets/coffees/arabe.svg"
import cafeComLeite from "../assets/coffees/cafe-com-leite.svg"
import capuccino from "../assets/coffees/capuccino.svg"
import chocolateQuente from "../assets/coffees/chocolate-quente.svg"
import cubano from "../assets/coffees/cubano.svg"
import expressoAmericano from "../assets/coffees/expresso-americano.svg"
import expressoCremoso from "../assets/coffees/expresso-cremoso.svg"
import expressoGelado from "../assets/coffees/expresso-gelado.svg"
import havaiano from "../assets/coffees/havaiano.svg"
import irlandes from "../assets/coffees/irlandes.svg"
import latte from "../assets/coffees/latte.svg"
import macaccino from "../assets/coffees/macaccino.svg"
import macchiato from "../assets/coffees/macchiato.svg"

export const coffeeList: Coffee[] = [
  new Coffee({
    title: "Café Tradicional",
    category: ["tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
    urlImage: tradicional
  }),
  new Coffee({
    title: "Expresso Americano",
    category: ["tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
    urlImage: expressoAmericano
  }),
  new Coffee({
    title: "Expresso Cremoso",
    category: ["tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
    urlImage: expressoCremoso
  }),
  new Coffee({
    title: "Expresso Gelado",
    category: ["tradicional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    urlImage: expressoGelado
  }),
  new Coffee({
    title: "Café com Leite",
    category: ["tradicional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    urlImage: cafeComLeite
  }),
  new Coffee({
    title: "Latte",
    category: ["tradicional", "com leite"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
    urlImage: latte
  }),
  new Coffee({
    title: "Macchiato",
    category: ["tradicional", "com leite"],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    urlImage: macchiato
  }),
  new Coffee({
    title: "Mocaccino",
    category: ["tradicional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    urlImage: macaccino
  }),
  new Coffee({
    title: "Chocolate Quente",
    category: ["tradicional", "com leite"],
    description: "Bebida feita com chocolate dissolvido no leite e café",
    price: 9.90,
    urlImage: chocolateQuente
  }),
  new Coffee({
    title: "Cubano",
    category: ["especial", "alcoólico", "gelado"],
    description: "Dink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
    urlImage: cubano
  }),
  new Coffee({
    title: "Havaiano",
    category: ["especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
    urlImage: havaiano
  }),
  new Coffee({
    title: "Árabe",
    category: ["especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
    urlImage: arabe
  }),
  new Coffee({
    title: "Irlandês",
    category: ["especial", "alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
    urlImage: irlandes
  }),
];
