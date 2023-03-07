import { it, describe, expect } from "vitest";
import { Cart } from "../../../core/cart/Cart";
import { Coffee } from "../../../core/coffee/Coffee";
import { Order } from "../../../core/order/Order";

describe("Cart", () => {
  it("Should be able to create a new cart", () => {
    const cart = new Cart({
      orders: [
        new Order({
          coffee: new Coffee({
            category: ["Com leite"],
            description: "Café com leite",
            price: 9.99,
            title: "Puro",
          }),
          quantity: 2,
        }),
      ],
      delivery: 30,
    });
    expect(cart).toBeTruthy();
  });

  it("Should be able to get a total value of the cart", () => {
    const cart = new Cart({
      orders: [
        new Order({
          coffee: new Coffee({
            category: ["tradicional"],
            description: "Café preto",
            price: 20.0,
            title: "Puro",
          }),
          quantity: 3,
        }),
        new Order({
          coffee: new Coffee({
            category: ["Com leite"],
            description: "Café com leite",
            price: 9.99,
            title: "Puro",
          }),
          quantity: 2,
        }),
      ],
      delivery: 30,
    });

    expect(cart).toBeTruthy();
    expect(cart.totalValeu()).toEqual(79.98);
  });

  it("should be abe to get a total itens of the cart", () => {
    const cart = new Cart({
      orders: [
        new Order({
          coffee: new Coffee({
            category: ["tradicional"],
            description: "Café preto",
            price: 20.0,
            title: "Puro",
          }),
          quantity: 3,
        }),
        new Order({
          coffee: new Coffee({
            category: ["Com leite"],
            description: "Café com leite",
            price: 9.99,
            title: "Puro",
          }),
          quantity: 2,
        }),
        new Order({
          coffee: new Coffee({
            category: ["Descafeinado"],
            description: "Café com leite",
            price: 9.99,
            title: "Puro",
          }),
          quantity: 2,
        }),
      ],
      delivery: 30,
    });

    expect(cart.totalItens).toEqual(7);
  });

  it("should be able to add a new order to cart", () => {
    const cart = new Cart({
      orders: [
        new Order({
          coffee: new Coffee({
            category: ["Com leite"],
            description: "Café com leite",
            price: 9.99,
            title: "Puro",
          }),
          quantity: 2,
        }),
      ],
      delivery: 30,
    });

    const newCart = cart.addToCart(
      new Order({
        coffee: new Coffee({
          category: ["Com leite"],
          description: "Café com leite",
          price: 9.99,
          title: "Puro",
        }),
        quantity: 2,
      })
    );

    expect(newCart.orders).toHaveLength(2);
  });

  it("should be able to remove an order from cart", () => {
    const orderToRemove = new Order({
      coffee: new Coffee({
        category: ["Com leite"],
        description: "Café com leite",
        price: 9.99,
        title: "Puro",
      }),
      quantity: 2,
    });
    const cart = new Cart({
      orders: [
        orderToRemove,
        new Order({
          coffee: new Coffee({
            category: ["Com leite"],
            description: "Café com leite",
            price: 9.99,
            title: "Puro",
          }),
          quantity: 2,
        }),
      ],
      delivery: 30,
    });

    const newCart = cart.removeFromCart(orderToRemove.id!)

    expect(cart.orders).toHaveLength(2);
    expect(newCart.orders).toHaveLength(1)
  });
});
