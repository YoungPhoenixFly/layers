import type { UseCase } from "../../../../../shared/core/UseCase";
import type { Channel } from "../../../domain/models/Channel";
import type { IChannelRepository } from "../../../domain/repositories/ChannelRepository";

export class FindAllChannels implements UseCase<void, Channel[]> {
  constructor(private channelRepo: IChannelRepository) {}

  async execute(): Promise<Channel[]> {
    return this.channelRepo.findAll();
  }
}
