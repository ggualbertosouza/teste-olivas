import { IPost } from "@/types/post";
import { useQuery } from "react-query";

export const usePost = (number: number) => {
  const { data, isLoading } = useQuery<IPost[]>({
    queryKey: "posts",
    queryFn: async () => {
      return await fetch(`posts?categories=${number}`).then((response) =>
        response.json(),
      );
    },
  });

  const formatter = new Intl.DateTimeFormat("pt-br");

  return {
    data,
    isLoading,
    formatter,
  };
};
