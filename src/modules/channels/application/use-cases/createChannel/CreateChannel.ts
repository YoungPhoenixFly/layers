import type { UseCase } from "../../../../../shared/core/UseCase";
import { Channel } from "../../../domain/models/Channel";
import type { IChannelRepository } from "../../../domain/repositories/ChannelRepository";
import { ChannelName } from "../../../domain/value-objects/ChannelName";
import type { CreateChannelDTO } from "./CreateChannelDTO";

export class CreateChannel implements UseCase<CreateChannelDTO, void> {
  constructor(private channelRepo: IChannelRepository) {}

  async execute(request: CreateChannelDTO): Promise<void> {
    const name = ChannelName.create(request.name);

    const channel = Channel.create({
      name,
    });

    await this.channelRepo.save(channel);
  }
}
