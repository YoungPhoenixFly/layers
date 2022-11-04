import type { MutationHook } from "../../../../shared/presentation/react/MutationHook";
import { trpc } from "../../../../shared/infrastructure/trpc/nextClient";
import type { CreateChannelDTO } from "../../application/use-cases/createChannel/CreateChannelDTO";

export const useCreateChannelMutation: MutationHook<CreateChannelDTO, void> = (
  options
) => {
  const mutation = trpc.channel.create.useMutation({
    ...options,
    onError: (error) => {
      options?.onError?.(new Error(error.message));
    },
  });
  return {
    mutate: (input) => mutation.mutate(input),
    isLoading: mutation.isLoading,
  };
};
