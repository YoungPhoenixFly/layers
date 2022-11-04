import { UniqueEntityID } from "../../../../../shared/core/domain/UniqueEntityID";
import { Channel } from "../../../domain/models/Channel";
import { ChannelNotFoundError } from "../../../domain/repositories/ChannelRepository";
import { ChannelName } from "../../../domain/value-objects/ChannelName";
import { channelRepository } from ".";

describe("PrismaChannelRepository", () => {
  afterEach(async () => {
    await channelRepository.deleteAll();
  });

  it("should save and find a channel", async () => {
    const channel = Channel.create({
      name: ChannelName.create("My Channel"),
    });
    await channelRepository.save(channel);
    const savedChannel = await channelRepository.find(channel._id);
    expect(savedChannel._id.value).toBe(channel._id.value);
    expect(savedChannel.name.value).toBe(channel.name.value);
  });
  it("should throw an error if the channel does not exist", async () => {
    await expect(
      channelRepository.find(new UniqueEntityID("non-existent-id"))
    ).rejects.toThrow(ChannelNotFoundError);
  });
  it("should find all the channels", async () => {
    const channel1 = Channel.create({
      name: ChannelName.create("My Channel 1"),
    });
    const channel2 = Channel.create({
      name: ChannelName.create("My Channel 2"),
    });
    await channelRepository.save(channel1);
    await channelRepository.save(channel2);
    const channels = await channelRepository.findAll();
    expect(channels).toHaveLength(2);
    expect(channels[0]?._id.value).toBe(channel1._id.value);
    expect(channels[0]?.name.value).toBe(channel1.name.value);
    expect(channels[1]?._id.value).toBe(channel2._id.value);
    expect(channels[1]?.name.value).toBe(channel2.name.value);
  });
  it("should delete all the channels", async () => {
    const channel1 = Channel.create({
      name: ChannelName.create("My Channel 1"),
    });
    const channel2 = Channel.create({
      name: ChannelName.create("My Channel 2"),
    });
    await channelRepository.save(channel1);
    await channelRepository.save(channel2);
    await channelRepository.deleteAll();
    const channels = await channelRepository.findAll();
    expect(channels).toHaveLength(0);
  });
});
