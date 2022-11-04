// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IQueryHookOptions {}

type SuccessResult<IQueryResult> = {
  data: IQueryResult;
  error: undefined;
  isError: false;
  isLoading: false;
  refetch: () => void;
};

type ErrorResult = {
  data: undefined;
  error: Error;
  isError: true;
  isLoading: false;
  refetch: () => void;
};

type LoadingResult = {
  data: undefined;
  error: undefined;
  isError: false;
  isLoading: true;
  refetch: () => void;
};

export type QueryHook<IQueryResult> = (
  options?: IQueryHookOptions
) => SuccessResult<IQueryResult> | ErrorResult | LoadingResult;
