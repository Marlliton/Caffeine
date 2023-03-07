import { it, describe, expect } from "vitest";
import { Coffee } from "../../../core/coffee/Coffee";
import { Order } from "../../../core/order/Order";

describe("Order", () => {
  it("Should be able to create a new order", () => {
    const order = new Order({
      coffee: new Coffee({
        category: ["tradicional"],
        description: "Café preto",
        price: 20.00,
        title: "Puro"
      }),
      quantity: 2
    })

    expect(order).toBeTruthy()
  });

});