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
      {data?.slice(6, 7).map((posts) => {
        return (
          <a href={posts.link} key={posts.id}>
            <Post.Root>
              <div className="flex items-center gap-2">
                <Post.Slug slug={`Customer experience`} />
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
          </a>
        );
      })}
    </>
  );
};
