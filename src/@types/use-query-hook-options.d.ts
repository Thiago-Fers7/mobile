import { UseQueryOptions } from "@tanstack/react-query";

export type UseQueryHookOptions<T> = Omit<UseQueryOptions<T>, "queryKey" | "queryFn">;
