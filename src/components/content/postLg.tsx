import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { usePost } from "@/hooks/usePost";

export const PostLg = () => {
  const { data, isLoading, formatter } = usePost();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {data?.slice(6, 9).map((posts) => (
        <Post.Root key={posts.id}>
          <hr />
          <Post.Date
            date={formatter.format(new Date(posts.date))}
            variant="white"
          />
          <Post.Slug slug={`${posts.slug.replace(/-/g, " ")}`} variant="blue" />
          <Post.Title title={`${posts.title.rendered}`} variant="white" />
        </Post.Root>
      ))}
    </>
  );
};
