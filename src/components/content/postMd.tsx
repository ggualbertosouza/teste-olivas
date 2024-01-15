import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { usePost } from "@/hooks/usePost";

export const PostMd = () => {
  const { data, isLoading, formatter } = usePost(373);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {data?.slice(1, 2).map((posts) => {
        return (
          <a href={posts.link} key={posts.id}>
          <Post.Root >
            <Post.Slug slug={`Customer experience`} />
            <Post.Date date={formatter.format(new Date(posts.date))} />
            <Post.Title title={`${posts.title.rendered}`} size="xl" />
            <Post.Content
              text={`${posts.content.rendered}`}
              variant="default"
            />
          </Post.Root>
          </a>
        );
      })}
    </>
  );
};
