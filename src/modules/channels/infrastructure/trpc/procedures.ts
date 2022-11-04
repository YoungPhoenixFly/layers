import { createChannel, findAllChannels } from "../prisma/use-cases";
import { newCreateChannelProcedure } from "./CreateChannelProcedure";
import { newFindAllChannelsProcedure } from "./FindAllChannelsProcedure";

const createChannelProcedure = newCreateChannelProcedure(createChannel);
const findAllChannelsProcedure = newFindAllChannelsProcedure(findAllChannels);

export { createChannelProcedure, findAllChannelsProcedure };
