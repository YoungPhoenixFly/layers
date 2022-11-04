import { CreateChannel } from "../../application/use-cases/createChannel/CreateChannel";
import { FindAllChannels } from "../../application/use-cases/findAllChannels/FindAllChannels";
import { channelRepository } from "./repositories";

const createChannel = new CreateChannel(channelRepository);
const findAllChannels = new FindAllChannels(channelRepository);

export { createChannel, findAllChannels };
