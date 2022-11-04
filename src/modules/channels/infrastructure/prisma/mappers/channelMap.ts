import { UniqueEntityID } from "../../../../../shared/core/domain/UniqueEntityID";
import type { Mapper } from "../../../../../shared/infrastructure/Mapper";
import { Channel } from "../../../domain/models/Channel";
import { ChannelName } from "../../../domain/value-objects/ChannelName";
import type { PrismaChannel } from "../repositories/PrismaChannelRepository";

export const prismaChannelMap: Mapper<Channel, PrismaChannel> = {
  toDomain(raw: PrismaChannel): Channel {
    const name = ChannelName.create(raw.name);
    return Channel.create(
      {
        name,
      },
      new UniqueEntityID(raw.id)
    );
  },
  toPersistence(domain: Channel): PrismaChannel {
    return {
      id: domain._id.value,
      name: domain.name.value,
    };
  },
};
