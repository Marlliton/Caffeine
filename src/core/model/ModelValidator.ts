export type Validation = { property: string; errorMessage: string };

interface ModelValidatorProps<T> {
  model: T;
  validations: Validation[];
  currentKey?: keyof T;
}

export class ModelValidator<T> {
  private _props: ModelValidatorProps<T>;
  constructor(props: ModelValidatorProps<T>) {
    this._props = props;
  }

  static model<T>(model: T): ModelValidator<T> {
    return new ModelValidator({
      model,
      validations: [],
    });
  }

  prop<k extends keyof T>(key: k): this {
    this._props.currentKey = key;
    return this;
  }

  notNull(): this {
    if (this._props.currentKey !== undefined) {
      const value = this._props.model[this._props.currentKey];
      if (!value) {
        const property = this._props.currentKey.toString();
        const message = `${property} cannot be null or undefined.`;
        this._props.validations.push({ property, errorMessage: message })
      }
      this._props.currentKey = undefined
    }
    return this;
  }

  get validations(): Validation[] {
    return this._props.validations;
  }
}
