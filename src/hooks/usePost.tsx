import { IPost } from "@/types/post";
import axios from "axios";
import { useQuery } from "react-query";

export const usePost = () => {
  const { data, isLoading } = useQuery<IPost[]>("posts", () =>
    axios
      .get("https://www.olivas.digital/wp-json/wp/v2/posts?categories=373")
      .then((response) => response.data),
  );

  const formatter = new Intl.DateTimeFormat("pt-br");

  return { data, isLoading, formatter };
};
