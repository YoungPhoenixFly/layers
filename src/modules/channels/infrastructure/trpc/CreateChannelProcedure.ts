import { publicProcedure } from "../../../../shared/infrastructure/trpc/server/trpc";
import type { CreateChannel } from "../../application/use-cases/createChannel/CreateChannel";
import { createChannelDTOSchema } from "../../application/use-cases/createChannel/CreateChannelDTO";

export const newCreateChannelProcedure = (createChannel: CreateChannel) =>
  publicProcedure.input(createChannelDTOSchema).mutation(async ({ input }) => {
    const { name } = input;
    await createChannel.execute({
      name,
    });
  });
