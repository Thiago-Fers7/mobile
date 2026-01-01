import { getCategories } from "@services/requests/categories/get-categories";
import { useQuery } from "@tanstack/react-query";

import { categoriesKeys } from "./categories-keys";

export function useGetCategories() {
  const query = useQuery({
    queryKey: categoriesKeys.all,
    queryFn: getCategories,
  });

  return query;
}
