import { UseGetCategory } from "@/hooks/useGetCategory";
import { api } from "@/lib/api";
import { IPost } from "@/types/post";
import { useQuery } from "react-query";

export const usePost = (number: number) => {
  const { data, isLoading } = useQuery<IPost[]>({
    queryKey: "posts",
    queryFn: () => {
      return api
        .get(`posts?categories=${number}`)
        .then((response) => response.data);
    },
  });

  const {result, load} = UseGetCategory(number);
  const formatter = new Intl.DateTimeFormat("pt-br");

  return {
    data,
    result,
    load,
    isLoading,
    formatter,
  };
};
