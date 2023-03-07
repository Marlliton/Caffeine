import { Entity, EntityProps } from "../model/Entity";
import { ModelValidator, Validation } from "../model/ModelValidator";
import { Order } from "../order/Order";

interface CartProps extends EntityProps {
  orders?: Order[];
  delivery?: number;
}

export class Cart extends Entity<Cart, CartProps> {
  constructor(props: CartProps) {
    super(props);
  }

  addToCart(order: Order) {
    const orders = this.orders;
    if (orders) {
      const newListOfCoffees = [...orders, order];

      return this.clone({
        orders: newListOfCoffees,
      });
    } else {
      return this.clone({ orders: [order] });
    }
  }

  removeFromCart(id: string) {
    const newListOfOrders = this.orders?.filter(order => order.id !== id);
    return this.clone({ orders: newListOfOrders });
  }

  get orders() {
    return this._props.orders;
  }
  get delivery() {
    return this._props.delivery;
  }
  get totalItens() {
    return this._props.orders?.map(order => order.quantity).reduce((acc, total) => acc + total, 0);
  }

  totalValeu() {
    const total = this.orders
      ?.map(order => order.price)
      .reduce((acc, total) => {
        return acc! + total!;
      }, 0);

    return total;
  }

  protected validations(): Validation[] {
    return ModelValidator.model(this).prop("orders").notNull().prop("delivery").notNull()
      .validations;
  }
}
