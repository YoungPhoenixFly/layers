import { ValueObject } from "../../../../shared/core/domain/ValueObject";

interface ChannelNameProps {
  value: string;
}

export class ChannelName extends ValueObject<ChannelNameProps> {
  get value(): string {
    return this.props.value;
  }

  private constructor(props: ChannelNameProps) {
    super(props);
  }

  public static create(name: string): ChannelName {
    if (name.length < 3) {
      throw new Error("Channel name must be at least 3 characters long");
    }
    if (name.length > 30) {
      throw new Error("Channel name must be at most 30 characters long");
    }
    return new ChannelName({ value: name });
  }
}
