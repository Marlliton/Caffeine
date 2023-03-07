import { it, describe, expect } from "vitest";
import { Coffee } from "../../../core/coffee/Coffee";
import { validationErros } from "../../../errors/Errors";

describe("Coffee", () => {
  it("should be able to create a coffee", () => {
    const coffee = new Coffee({
      title: "Café com Leite",
      category: ["Tradicional", "Com Leite"],
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.99,
    });

    expect(coffee).toBeTruthy()
    expect(coffee).toHaveProperty("id")
  });

  it("should able to modify a property with clone method", () => {
    const coffee = new Coffee({
      title: "Café com Leite",
      category: ["Tradicional", "Com Leite"],
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.99,
    });

    const coffeeWithMorePrice = coffee.clone({price: 19.99})

    expect(coffeeWithMorePrice.price).toEqual(19.99)
    expect(coffeeWithMorePrice.category).length(2)
    expect(coffeeWithMorePrice.description).toBeTruthy()
    expect(coffeeWithMorePrice.id).toBeTruthy()
    expect(coffeeWithMorePrice.title).toBeTruthy()
  })

  it("should an error if it has invalid price", () => {
    expect(() => {
      new Coffee({
        title: "Café com Leite",
        category: ["Tradicional", "Com Leite"],
        description: "Meio a meio de expresso tradicional com leite vaporizado",
      });
    }).toThrowError()
    
  })
});