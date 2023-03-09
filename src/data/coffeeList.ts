import { Coffee } from "../core/coffee/Coffee";

export const coffeeList: Coffee[] = [
  new Coffee({
    title: "Café Tradicional",
    category: ["tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
  }),
  new Coffee({
    title: "Expresso Americano",
    category: ["tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
  }),
  new Coffee({
    title: "Expresso Cremoso",
    category: ["tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
  }),
  new Coffee({
    title: "Expresso Gelado",
    category: ["tradicional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
  }),
  new Coffee({
    title: "Café com Leite",
    category: ["tradicional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
  }),
  new Coffee({
    title: "Latte",
    category: ["tradicional", "com leite"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
  }),
  new Coffee({
    title: "Macchiato",
    category: ["tradicional", "com leite"],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
  }),
  new Coffee({
    title: "Mocaccino",
    category: ["tradicional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
  }),
  new Coffee({
    title: "Chocolate Quente",
    category: ["tradicional", "com leite"],
    description: "Bebida feita com chocolate dissolvido no leite e café",
    price: 9.90,
  }),
  new Coffee({
    title: "Cubano",
    category: ["especial", "alcoólico", "gelado"],
    description: "Dink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
  }),
  new Coffee({
    title: "Havaiano",
    category: ["especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
  }),
  new Coffee({
    title: "Árabe",
    category: ["especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
  }),
  new Coffee({
    title: "Irlandês",
    category: ["especial", "alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
  }),
];
