import type { UniqueEntityID } from "./../../../../shared/core/domain/UniqueEntityID";
import { Entity } from "../../../../shared/core/domain/Entity";
import type { ChannelName } from "../value-objects/ChannelName";

export interface ChannelProps {
  name: ChannelName;
}

export class Channel extends Entity<ChannelProps> {
  get name(): ChannelName {
    return this.props.name;
  }

  private constructor(props: ChannelProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ChannelProps, id?: UniqueEntityID): Channel {
    return new Channel(props, id);
  }
}
