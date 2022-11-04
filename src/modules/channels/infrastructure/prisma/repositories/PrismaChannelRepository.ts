import type { Channel as _PrismaChannel, PrismaClient } from "@prisma/client";
import type { UniqueEntityID } from "../../../../../shared/core/domain/UniqueEntityID";
import type { Mapper } from "../../../../../shared/infrastructure/Mapper";
import type { Channel } from "../../../domain/models/Channel";
import type { IChannelRepository } from "../../../domain/repositories/ChannelRepository";
import { ChannelNotFoundError } from "../../../domain/repositories/ChannelRepository";

export type PrismaChannel = Omit<_PrismaChannel, "createdAt" | "updatedAt">;

export class PrismaChannelRepository implements IChannelRepository {
  constructor(
    private prisma: PrismaClient,
    private channelMapper: Mapper<Channel, PrismaChannel>
  ) {}

  async find(id: UniqueEntityID) {
    const channel = await this.prisma.channel.findUnique({
      where: {
        id: id.value,
      },
    });

    if (!channel) {
      throw new ChannelNotFoundError();
    }

    return this.channelMapper.toDomain(channel);
  }

  async findAll() {
    const channels = await this.prisma.channel.findMany();
    return channels.map((channel) => this.channelMapper.toDomain(channel));
  }

  async save(channel: Channel) {
    const channelData = this.channelMapper.toPersistence(channel);

    await this.prisma.channel.upsert({
      where: {
        id: channel._id.value,
      },
      update: channelData,
      create: channelData,
    });
  }

  async deleteAll() {
    await this.prisma.channel.deleteMany();
  }
}
