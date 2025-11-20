import { QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

import { queryClient } from "./queryClient";

type QueryProviderProps = {
  children: ReactNode;
};

export function QueryProvider({ children }: QueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
