export class Identifier<T> {
  constructor(private _value: T) {}

  equals(id?: Identifier<T>): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.value === this.value;
  }

  toString(): string {
    return String(this.value);
  }

  get value(): T {
    return this._value;
  }
}
