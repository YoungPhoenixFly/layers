import { publicProcedure } from "../../../../shared/infrastructure/trpc/server/trpc";
import type { ChannelDTO } from "../../application/dtos/channelDTO";
import type { FindAllChannels } from "../../application/use-cases/findAllChannels/FindAllChannels";

export const newFindAllChannelsProcedure = (findAllChannels: FindAllChannels) =>
  publicProcedure.query<ChannelDTO[]>(async () => {
    const channels = await findAllChannels.execute();
    return channels.map(
      (channel): ChannelDTO => ({
        id: channel._id.value,
        name: channel.name.value,
      })
    );
  });
