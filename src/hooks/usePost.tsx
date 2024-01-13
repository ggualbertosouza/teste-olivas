import { api } from "@/lib/api";
import { IPost } from "@/types/post";
import { useQuery } from "react-query";

export const usePost = () => {
  const { data, isLoading } = useQuery<IPost[]>({
    queryKey: "posts",
    queryFn: () => {
      return api.get("posts?categories=373").then((response) => response.data);
    },
  });

  const formatter = new Intl.DateTimeFormat("pt-br");

  return {
    data,
    isLoading,
    formatter,
  };
};
