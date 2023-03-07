import { Cloneable } from "../shared/Cloneable";
import { v4 as uuidV4 } from "uuid";
import { Validation } from "./ModelValidator";
import { validationErros } from "../../errors/Errors";

export interface EntityProps {
  id?: string;
}

export abstract class Entity<T, TProps extends EntityProps> extends Cloneable<T, TProps> {
  constructor(props: TProps) {
    super(props);
    if (!props.id) {
      this._props.id = uuidV4();
    }
    this.validate();
  }

  get id() {
    return this.props.id;
  }

  private validate() {
    const errors = this.validations();
    if (errors.length) {
      throw new validationErros(errors)
    }
  }

  protected validations(): Validation[] {
    return [];
  }
}
