import { Coffee } from "../coffee/Coffee";
import { Entity, EntityProps } from "../model/Entity";
import { ModelValidator, Validation } from "../model/ModelValidator";

interface OrderProps extends EntityProps {
  coffee?: Coffee;
  quantity?: number;
}

export class Order extends Entity<Order, OrderProps> {
  constructor(props: OrderProps) {
    super(props);
  }

  increaseAmount() {
    const quantity = this.quantity + 1;
    return this.clone({ quantity });
  }

  decreaseAmount() {
    const quantity = this.quantity - 1;
    return this.clone({ quantity });
  }

  get id() {
    return this._props.id;
  }
  get coffee() {
    return this._props.coffee;
  }
  get price() {
    const coffeePrice = this.coffee?.price;
    if (!coffeePrice) return null;
    return coffeePrice * this?.quantity;
  }
  get quantity() {
    return this._props.quantity ?? 0;
  }

  protected validations(): Validation[] {
    return ModelValidator.model(this).prop("coffee").notNull().prop("quantity").notNull()
      .validations;
  }
}
