import { trpc } from "../../../../shared/infrastructure/trpc/nextClient";
import type { QueryHook } from "../../../../shared/presentation/react/QueryHook";
import type { ChannelDTO } from "../../application/dtos/channelDTO";

export const useFindAllChannelsQuery: QueryHook<ChannelDTO[]> = () => {
  const query = trpc.channel.findAll.useQuery();

  if (query.error) {
    return {
      data: undefined,
      error: new Error(query.error.message),
      isError: true,
      isLoading: false,
      refetch: () => query.refetch(),
    };
  }

  if (query.data) {
    return {
      data: query.data,
      error: undefined,
      isError: false,
      isLoading: false,
      refetch: () => query.refetch(),
    };
  }

  return {
    data: query.data,
    error: undefined,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: () => query.refetch(),
  };
};
