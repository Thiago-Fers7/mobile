import { generalKeys } from "@hooks/queries/general-keys";
import { mmkvPersister } from "@services/storage/mmkv";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import React, { ReactNode } from "react";

import { queryClient } from "./queryClient";

type QueryProviderProps = {
  children: ReactNode;
};

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: mmkvPersister,
        maxAge: Infinity,
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => {
            const isSuccess = query.state.status === "success";

            const shouldPersist = query.queryKey.some((key) =>
              generalKeys.persistOffline.includes(
                key as (typeof generalKeys.persistOffline)[number]
              )
            );

            return isSuccess && shouldPersist;
          },
        },
      }}
      onSuccess={() => {
        console.log("Cache restaurado via MMKV com sucesso!");
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
