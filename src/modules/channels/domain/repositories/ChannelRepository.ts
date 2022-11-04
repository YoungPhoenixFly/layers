import type { UniqueEntityID } from "../../../../shared/core/domain/UniqueEntityID";
import type { Channel } from "../models/Channel";

export interface IChannelRepository {
  find(id: UniqueEntityID): Promise<Channel>;
  findAll(): Promise<Channel[]>;
  save(channel: Channel): Promise<void>;
  deleteAll(): Promise<void>;
}

export class ChannelNotFoundError extends Error {
  constructor() {
    super("Channel not found");
  }
}
