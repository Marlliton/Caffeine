import { Validation } from "../core/model/ModelValidator";

export class validationErros extends Error {
  public _errors: Validation[];
  constructor(errors: Validation[]) {
    const message = `Validation failed with ${errors.length} errors`;
    super(message);
    this.name = "ValidationErros";
    this._errors = errors;
  }
}
