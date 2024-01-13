import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { UseGetCategory } from "@/hooks/useGetCategory";
import { usePost } from "@/hooks/usePost";

export const PostMd = () => {
  const { data, isLoading, formatter } = usePost(373);
  const { result } = UseGetCategory(373);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {data?.slice(1, 2).map((posts) => {
        return (
          <Post.Root key={posts.id}>
            {result && <Post.Slug slug={`${result?.name}`} />}
            <Post.Date date={formatter.format(new Date(posts.date))} />
            <Post.Title title={`${posts.title.rendered}`} size="xl" />
            <Post.Content
              text={`${posts.content.rendered}`}
              variant="default"
            />
          </Post.Root>
        );
      })}
    </>
  );
};
