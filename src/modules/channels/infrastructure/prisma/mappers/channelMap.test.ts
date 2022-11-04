import { Channel } from "../../../domain/models/Channel";
import { ChannelName } from "../../../domain/value-objects/ChannelName";
import { prismaChannelMap } from "./channelMap";

describe("prismaChannelMap", () => {
  it("should map a prisma channel to a channel", () => {
    const prismaChannel = {
      id: "test-id",
      name: "My Channel",
    };
    const channel = prismaChannelMap.toDomain(prismaChannel);
    expect(channel._id.value).toBe("test-id");
    expect(channel.name.value).toBe("My Channel");
  });
  it("should map a channel to a prisma channel", () => {
    const channel = Channel.create({
      name: ChannelName.create("My Channel"),
    });
    const prismaChannel = prismaChannelMap.toPersistence(channel);
    expect(prismaChannel.id).toBe(channel._id.value);
    expect(prismaChannel.name).toBe(channel.name.value);
  });
});
