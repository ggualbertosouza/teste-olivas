import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { UseGetCategory } from "@/hooks/useGetCategory";
import { usePost } from "@/hooks/usePost";

export const PostSm = () => {
  const { data, isLoading, formatter } = usePost(373);
  const { result } = UseGetCategory(373);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data &&
        result &&
        data?.slice(3, 9).map((posts) => (
          <Post.Root key={posts.id}>
            <Post.Title title={`${posts.title.rendered}`} />
            <Post.Date date={formatter.format(new Date(posts.date))} />
            <Post.Slug slug={`${result?.name}`} />
            <hr />
          </Post.Root>
        ))}
    </>
  );
};
