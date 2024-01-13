import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { usePost } from "@/hooks/usePost";

export const PostSm = () => {
  const { data, isLoading, formatter } = usePost();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {data?.slice(3, 9).map((posts) => (
        <Post.Root key={posts.id}>
          <Post.Title title={`${posts.title.rendered}`} />
          <Post.Date date={formatter.format(new Date(posts.date))} />
          <Post.Slug slug={`${posts.slug.replace(/-/g, " ")}`} />
          <hr />
        </Post.Root>
      ))}
    </>
  );
};
