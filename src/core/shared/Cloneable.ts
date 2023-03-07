interface cloneableProps<T, TProps> {
  clone(props: TProps): T;
}

export abstract class Cloneable<T, TProps> implements cloneableProps<T, TProps> {
  constructor(protected _props: TProps) {}

  get props() {
    return this._props;
  }

  clone(props: TProps): T {
    const cloneProps = { ...this._props, ...props };

    return new (this.constructor as new (props: TProps) => T)(cloneProps);
  }
}
