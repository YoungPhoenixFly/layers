import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "../../../env/server.mjs";
import { createContext } from "../../../shared/infrastructure/trpc/server/context";
import { appRouter } from "../../../shared/infrastructure/trpc/server/router/_app";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});
