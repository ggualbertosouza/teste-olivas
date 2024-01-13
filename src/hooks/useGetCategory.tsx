import { api } from "@/lib/api";
import { useQuery } from "react-query";

export const UseGetCategory = (number: number) => {
  const { data, isLoading } = useQuery<ICategory[]>("category", () => {
    return api.get("categories").then((response) => response.data);
  });

  const result = data?.find((item) => item.id == number);

  return {
    result,
    load: isLoading,
  };
};
