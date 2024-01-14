import { IPost } from "@/types/post";
import { useQuery } from "react-query";

export const usePost = (number: number) => {
  const { data, isLoading } = useQuery<IPost[]>({
    queryKey: "posts",
    queryFn: async () => {
      return await fetch(
        `https://www.olivas.digital/wp-json/wp/v2/posts?categories=${number}`,
        { mode: "cors" },
      ).then((response) => response.json());
    },
  });

  const formatter = new Intl.DateTimeFormat("pt-br");

  return {
    data,
    isLoading,
    formatter,
  };
};
