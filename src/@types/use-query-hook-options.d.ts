import { UseQueryOptions } from "@tanstack/react-query";

export type UseQueryHookOptions<T> = Omit<UseQueryOptions<T>, "queryKey" | "queryFn">;

// // export type UseMutationHookOptions<T, Error, TVariables> = Omit<
// //   UseMutationOptions<T, Error, TVariables>,
// //   "mutationFn"
// >;
