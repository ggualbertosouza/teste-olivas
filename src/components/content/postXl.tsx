import { Loading } from "@/components/loading";
import { Post } from "@/components/posts";
import { usePost } from "@/hooks/usePost";

export const PostXl = () => {
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
      {data?.slice(4, 5).map((posts) => {
        return (
          <Post.Root key={posts.id}>
            <div className="flex items-center gap-2">
              <Post.Slug slug={`Blog`} />
              <Post.Date
                date={formatter.format(new Date(posts.date))}
                variant="blue"
              />
            </div>
            <Post.Title title={`${posts.title.rendered}`} size="lg" />
            <div className="w-[80%]">
              <Post.Content
                text={`${posts.yoast_head_json.description}`}
                variant="description"
              />
            </div>
          </Post.Root>
        );
      })}
    </>
  );
};
