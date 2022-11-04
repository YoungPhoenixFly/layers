import cuid from "cuid";
import { Identifier } from "./Identifier";

export class UniqueEntityID extends Identifier<string> {
  constructor(id?: string) {
    super(id ? id : cuid());
  }
}
