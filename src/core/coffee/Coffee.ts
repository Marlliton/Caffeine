import { Entity, EntityProps } from "../model/Entity";
import { ModelValidator, Validation } from "../model/ModelValidator";

export interface CoffeeProps extends EntityProps {
  title?: string;
  category?: string[];
  description?: string;
  price?: number;
}

export class Coffee extends Entity<Coffee, CoffeeProps> {
  constructor(props: CoffeeProps) {
    super(props);
  }

  get title() {
    return this.props.title;
  }
  get category() {
    return this.props.category;
  }
  get description() {
    return this.props.description;
  }
  get price() {
    return this.props.price;
  }

  protected validations(): Validation[] {
    return ModelValidator.model(this)
      .prop("title")
      .notNull()
      .prop("category")
      .notNull()
      .prop("price")
      .notNull().validations;
  }
}
