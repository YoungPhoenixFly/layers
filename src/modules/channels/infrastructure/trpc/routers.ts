import { router } from "../../../../shared/infrastructure/trpc/server/trpc";
import { createChannelProcedure, findAllChannelsProcedure } from "./procedures";

export const channelRouter = router({
  create: createChannelProcedure,
  findAll: findAllChannelsProcedure,
});
