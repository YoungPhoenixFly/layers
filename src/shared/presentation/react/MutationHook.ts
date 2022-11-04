interface IMutationHookOptions<IMutationResult> {
  onSuccess?: (data: IMutationResult) => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
}

export type MutationHook<IMutationInput, IMutationResult> = (
  options?: IMutationHookOptions<IMutationResult>
) => {
  mutate: (input: IMutationInput) => void;
  isLoading: boolean;
};
