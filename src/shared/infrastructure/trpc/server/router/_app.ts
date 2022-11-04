import { channelRouter } from "../../../../../modules/channels/infrastructure/trpc/routers";
import { router } from "../trpc";

export const appRouter = router({
  channel: channelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
