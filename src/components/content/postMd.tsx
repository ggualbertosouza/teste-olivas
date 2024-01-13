import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { usePost } from "@/hooks/usePost";

export const PostMd = () => {
  const { data, isLoading, category, formatter } = usePost(373);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {data?.slice(1, 2).map((posts) => {
        return (
          <Post.Root key={posts.id}>
            <Post.Slug slug={category} />
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
