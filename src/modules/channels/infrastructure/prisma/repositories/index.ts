import { prismaChannelMap } from "../mappers/channelMap";
import { PrismaChannelRepository } from "./PrismaChannelRepository";
import { prisma } from "../../../../../shared/infrastructure/prisma/client";

const channelRepository = new PrismaChannelRepository(prisma, prismaChannelMap);

export { channelRepository };
