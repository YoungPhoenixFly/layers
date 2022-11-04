import { z } from "zod";

export const createChannelDTOSchema = z.object({
  name: z.string(),
});

export type CreateChannelDTO = z.infer<typeof createChannelDTOSchema>;
